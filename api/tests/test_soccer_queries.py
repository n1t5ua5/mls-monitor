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

    def delete_comment(self, comment_id: str, username: str):
        if comment_id == "1" and username == "testuser":
            return True
        return False


def mock_user():
    return {"username": "testuser"}


def test_list_comment():
    app.dependency_overrides[CommentsQueries] = FakeCommentQueries
    response = client.get("/api/comments")
    assert response.status_code == 200
    assert response.json() == [
        {"comment_id": 1, "text": "I just want both teams to have fun!"},
        {"comment_id": 2, "text": "Messi is messy!"},
    ]

    app.dependency_overrides = {}


def test_delete_comment():
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mock_user
    app.dependency_overrides[CommentsQueries] = FakeCommentQueries

    response = client.delete("/api/comment/", params={"comment_id": "1"})
    assert response.status_code == 200
    assert response.json() == True

    app.dependency_overrides = {}
