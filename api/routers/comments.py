from fastapi import APIRouter, Depends, HTTPException
from queries.comments import CommentsQueries
from authenticator import authenticator
router = APIRouter()


@router.get("/api/get-comment")
def get_comments(comments: str, repo: CommentsQueries = Depends()):
    return repo.get_comment(comments)


@router.get("/api/comments")
def get_all_comments(repo: CommentsQueries = Depends()):
    return repo.get_all()


@router.post("/api/comments/")
def create_comment(comment_id: str, user: dict = Depends(
    authenticator.try_get_current_account_data),
    repo: CommentsQueries = Depends()):
    if user is None:
        raise HTTPException(status_code=401, detail="Please Login to add a comment")
    return repo.create_comment(comment_id, user["username"])


@router.delete("/api/delete-comment/")
def delete_comment(comment_id: str, user: dict = Depends(authenticator.try_get_current_account_data), repo: CommentsQueries = Depends()):
    return repo.delete_comment(comment_id, user["username"])
