from pydantic import BaseModel
from pymongo import MongoClient
from typing import List
import os
from bson.objectid import ObjectId


class CommentIn(BaseModel):
    username: str
    text: str


class CommentOut(BaseModel):
    id: str
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

    def create_comment(self, comment: str) -> CommentOut:
        comment_to_add = {"comment": comment}
        result = self.collection.insert_one(comment_to_add)
        print(result, "llllllllllllllllllll")
        if result.inserted_id:
            return self.get_comment(str(result.inserted_id))

    def delete_comment(self, comment_id: str) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(comment_id)})
        return result.deleted_count > 0
