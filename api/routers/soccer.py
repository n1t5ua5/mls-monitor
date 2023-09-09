from fastapi import APIRouter, Depends
from queries.soccer import TeamQueries


router = APIRouter()


@router.get("/api/teams")
def list_teams(repo: TeamQueries = Depends()):
    return repo.list_teams()


@router.get("/api/teams/{name}")
def get_team_details(name: str, repo: TeamQueries = Depends()):
    return repo.get_team_details(name)
