from fastapi.testclient import TestClient
import json
from main import app
from queries.favorites import FavoritesQueries
from models import FavoriteIn
from authenticator import authenticator

client = TestClient(app)


class FakeFavoritesQueries:
    def create(self, favorite_in: FavoriteIn, account_id: str):
        favorite = favorite_in.dict()
        favorite["account_id"] = account_id
        favorite["id"] = "mongoid"

        return favorite

    def delete(self, favorite_id: str, username: str):
        if favorite_id == "1" and username == "testuser":
            return True
        return False


def mock_user():
    return {"username": "testuser"}


def test_create_favorite():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    body = {"team_name": "Inter Miami",
            "id": "99hfhd7474h7d7"
            # "account_id": "23448fnf90k"
            }
    print(json.dumps(body))
    res = client.post("/api/favorites", json=json.dumps(body), params={account_id})
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "team_name": "Inter Miami",
        "id": "99hfhd7474h7d7"
        # "account_id": "23448fnf90k",
    }

    app.dependency_overrides = {}


def test_delete_favorite():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries

    response = client.delete("/api/favorites/64f95feac3386ed6755d6c36")
    assert response.status_code == 200
    assert response.json() == {"eureka": True}

    app.dependency_overrides = {}
