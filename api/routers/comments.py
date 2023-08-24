from fastapi import APIRouter, Depends
from queries.comments import CommentsQueries

<<<<<<< HEAD

router = APIRouter()


@router.get("/api/comment/")
def get_comment(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.get_comment(comment_id)


@router.delete("/api/delete_comment/")
def delete_comment(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.delete_comment(comment_id)


@router.post("/api/create_comment/")
def create_comment(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.create_comment(comment_id)
=======
router = APIRouter()


@router.get("/api/")
def get_comments(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.get_comment(comment_id)


@router.get("/api/list-comments")
def get_all_comments(repo: CommentsQueries = Depends()):
    return repo.get_all()


@router.post("/api/create-comment/")
def create_comment(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.create_comment(comment_id)


@router.delete("/api/delete-comment/")
def delete_comment(comment_id: str, repo: CommentsQueries = Depends()):
    return repo.delete_comment(comment_id)
>>>>>>> main
