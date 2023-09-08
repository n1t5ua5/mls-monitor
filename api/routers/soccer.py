from fastapi import APIRouter, Depends
from queries.soccer import TeamQueries


router = APIRouter()


@router.get("/api/teams")
def list_teams(repo: TeamQueries = Depends()):
    return repo.list_teams()


@router.get("/api/team-details/{team_id}")
def get_team_details(team_id: str, repo: TeamQueries = Depends()):
    return repo.get_team_details(team_id)
