from pymongo import MongoClient
from pydantic import BaseModel
from typing import Optional


client = MongoClient("mongodb://hacks:soccer@mongo")
db = client["hack_reactor_hacks_db"]
comments_collection = db["comments"]
users_collection = db["users"]


class CommentBase(BaseModel):
    content: str
    team_id: Optional[int]


class CommentCreate(CommentBase):
    user_id: int


class Comment(CommentBase):
    id: int
    user_id: int


app = FastAPI()


@app.post("/comment/")
def create_comment(
    comment: CommentCreate, current_user: User = Depends(get_current_user)
):
    comment_dict = comment.dict()
    comment_dict["_id"] = comments_collection.count_documents({}) + 1
    comments_collection.insert_one(comment_dict)
    return {"message": "Comment added successfully"}


@app.get("/comments/")
def read_comments(skip: int = 0, limit: int = 10):
    comments = list(comments_collection.find().skip(skip).limit(limit))
    for comment in comments:
        comment["id"] = comment.pop("_id")
    return comments
