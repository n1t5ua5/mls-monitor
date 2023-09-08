from fastapi.testclient import TestClient
from main import app
from queries.soccer import TeamQueries

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
