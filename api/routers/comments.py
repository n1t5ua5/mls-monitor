from fastapi import APIRouter, Depends
from queries.comments import CommentsQueries
from authenticator import authenticator
router = APIRouter()


@router.get("/api/")
def get_comments(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.get_comment(comment_id)


@router.get("/api/list-comments")
def get_all_comments(repo: CommentsQueries = Depends()):
    return repo.get_all()


@router.post("/api/create-comment/")
def create_comment(comment_id: str, user: dict = Depends(authenticator.try_get_current_account_data), repo: CommentsQueries = Depends()):
    print(authenticator, "fhfhfhhfhfhfhfhfhhfhh")
    return repo.create_comment(comment_id, user["email"])


@router.delete("/api/delete-comment/")
def delete_comment(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.delete_comment(comment_id)


f
fffffff
mmmdmdmdmdmd
fddd
ffff
