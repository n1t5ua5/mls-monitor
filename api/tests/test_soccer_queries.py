from fastapi.testclient import TestClient
from main import app
from queries.soccer import TeamQueries
from queries.comments import CommentsQueries
from authenticator import authenticator
from queries.accounts import (
    AccountQueries,
    AccountOutWithPassword,
    DuplicateAccountError,
)
from models import AccountIn

client = TestClient(app)


class FakeTeamQueries:
    def list_teams(self):
        return [
            {"team_id": 1, "name": "Team A"},
            {"team_id": 2, "name": "Team B"},
        ]

    def get_team_details(self, team_id: str):
        if team_id == "1":
            return {"team_id": 1, "name": "Team A"}
        return None


def test_list_teams():
    app.dependency_overrides[TeamQueries] = FakeTeamQueries

    response = client.get("/api/")
    assert response.status_code == 200
    assert response.json() == [
        {"team_id": 1, "name": "Team A"},
        {"team_id": 2, "name": "Team B"},
    ]

    app.dependency_overrides = {}


def test_get_team_details():
    app.dependency_overrides[TeamQueries] = FakeTeamQueries

    response = client.get("/api/")
    assert response.status_code == 200
    assert response.json() == [
        {"team_id": 1, "name": "Team A"},
        {"team_id": 2, "name": "Team B"},
    ]

    app.dependency_overrides = {}


class FakeCommentQueries:
    def get_all(self):
        return [
            {"comment_id": 1, "text": "I just want both teams to have fun!"},
            {"comment_id": 2, "text": "Messi is messy!"},
        ]

    def create_comment(self, comment: str, username: str):
        return {"comment_id": 3, "text": comment, "username": username}

    def delete_comment(self, comment_id: str, username: str):
        if comment_id == "1" and username == "testuser":
            return True
        return False


def mock_user():
    return {"username": "testuser"}


def test_create_comment():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[CommentsQueries] = FakeCommentQueries

    comment_id = {"comment": "Beckham bends it!"}

    response = client.post("/api/create-comment/", json=comment_id)
    data = response.json()
    assert response.status_code == 200
    assert data == {
        "comment_id": 3,
        "comment": "Beckham bends it!",
        "username": "testuser",
    }

    app.dependency_overrides = {}


def test_delete_comment():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[CommentsQueries] = FakeCommentQueries

    response = client.delete(
        "/api/delete-comment/", params={"comment_id": "1"}
    )
    assert response.status_code == 200
    assert response.json() == True

    app.dependency_overrides = {}


# def fake_get_current_account_data():
#     return {"id": "1000", "username": "testuser@.com"}


# class FakeAccountQueries:
#     def create(
#         self, info: AccountIn, hashed_password: str
#     ) -> AccountOutWithPassword:
#         if info.email == "duplicate@.com":
#             raise DuplicateAccountError()
#         account_data = info.dict()
#         account_data["id"] = "fake-id"
#         account_data["hashed_password"] = hashed_password
#         return AccountOutWithPassword(**account_data)

#     def get(self, email: str) -> AccountOutWithPassword:
#         return AccountOutWithPassword(
#             id="1000",
#             email="testuser@.com",
#             username="testuser",
#             full_name="Test User",
#             hashed_password=authenticator.hash_password("testpassword"),
#         )


# def test_create_account():
#     app.dependency_overrides[AccountQueries] = FakeAccountQueries
#     app.dependency_overrides[
#         authenticator.try_get_current_account_data
#     ] = fake_get_current_account_data

#     account_data = {
#         "id": "1000",
#         "email": "newuser@.com",
#         "username": "newuser",
#         "password": "newpassword",
#         "full_name": "New User",
#     }

#     response = client.post("/api/accounts", json=account_data)
#     data = response.json()
#     print(data, "XXXXXXXXXXXXXXXXXXXXX")
#     assert response.status_code == 200
#     assert data["account"]["id"] == "1000"
#     assert data["account"]["email"] == "newuser@.com"
#     assert data["account"]["username"] == "newuser"
#     assert "hashed_password" in data["account"]
#     assert data["account"]["full_name"] == "New User"
