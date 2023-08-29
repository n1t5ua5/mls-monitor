from pydantic import BaseModel
from pymongo import MongoClient
from fastapi import Depends

from bson.objectid import ObjectId
from queries.client import Queries
from authenticator import authenticator


class CommentIn(BaseModel):
    username: str
    text: str


class CommentOut(BaseModel):
    id: str
    username: str
    comment: str


class CommentsList(BaseModel):
    comments: list[CommentOut]


class CommentsQueries(Queries):
    DB_NAME = "User-Comments"
    COLLECTION = "comments"

    def get_all(self) -> list[CommentOut]:
        results = self.collection.find()
        print(results, "kfkfkfkkfkfkfkkf")
        comments = []
        for row in results:
            row["id"] = str(row["_id"])
            row["comment"] = str(row["comment"])
            comment = CommentOut(**row)
            comments.append(comment)
        return comments

    def get_comment(self, comment_id: str) -> CommentOut:
        result = self.collection.find_one({"_id": ObjectId(comment_id)})
        print(result, "lhlhlhlhlhlhlhlhlhlhlhlhlhlhlhlhlhlhl")
        if result:
            result["id"] = str(result["_id"])
            result["comment"] = str(result["comment"])
            return CommentOut(**result)

    def create_comment(self, comment: str, username: str) -> CommentOut:
        comment_to_add = {"comment": comment, "username": username}
        result = self.collection.insert_one(comment_to_add)
        print(result, "llllllllllllllllllll")
        if result.inserted_id:
            return self.get_comment(str(result.inserted_id))

    def delete_comment(self, comment_id: str, username) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(comment_id), "username": username})
        return result.deleted_count > 0
