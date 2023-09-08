from fastapi import APIRouter, Depends
from queries.favorites import FavoritesQueries
from authenticator import authenticator
from models import FavoriteIn, FavoriteOut, DeleteStatus
router = APIRouter()


@router.get("/api/")
def get_favorites(favorite_id: str, repo: FavoritesQueries = Depends()):
    return repo.get_favorites(favorite_id)


@router.get("/api/list-favorites")
def get_all_favorites(repo: FavoritesQueries = Depends()):
    return repo.get_all()


@router.post("/api/favorites", response_model=FavoriteOut)
def create_favorite(
    favorite_in: FavoriteIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return queries.create(favorite_in, account_id=account_data["id"])


@router.delete("/api/favorites/{favorite_id}", response_model=DeleteStatus)
def delete_favorite(
    favorite_id: str,
    account_data: dict = Depends(authenticator.try_get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return {"success": queries.delete(favorite_id, account_data["id"])}
