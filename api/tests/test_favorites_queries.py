from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
from models import FavoriteIn
from authenticator import authenticator

client = TestClient(app)


class FakeFavoritesQueries:
    def create(self, favorite_in: FavoriteIn, account_id: str):
        favorite = favorite_in.dict()
        favorite["account_id"] = account_id
        favorite["id"] = "1q2w3e4r5t6y"
        return favorite

    def delete(self, favorite_id: str, username: str):
        if favorite_id == "1" and username == "testuser":
            return True
        return False


def mock_user():
    return {"username": "testuser", "id": "44456"}


def test_create_favorite():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    body = {"team_name": "Inter Miami",
            "id": "1q2w3e4r5t6y",
            "account_id": "44456"
            }
    res = client.post(
        "/api/favorites", json=body, params={"account_id": body["account_id"]})
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "team_name": "Inter Miami",
        "id": "1q2w3e4r5t6y",
        "account_id": "44456"
    }

    app.dependency_overrides = {}


def test_delete_favorite():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries

    response = client.delete("/api/favorites/1")
    assert response.status_code == 200
    assert response.json() == {"success": False}

    app.dependency_overrides = {}
