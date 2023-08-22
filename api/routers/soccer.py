from fastapi import APIRouter, Depends
from queries.soccer import TeamQueries

router = APIRouter()


@router.get("/api/")
def list_teams(repo: TeamQueries = Depends()):
    return repo.list_teams()


@router.get("/api/team-details/")
def get_team_details(name: str, repo: TeamQueries = Depends()):
    return repo.get_team_details(name)
