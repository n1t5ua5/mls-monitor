from .client import Queries
from pydantic import BaseModel
from bson.objectid import ObjectId


class CommentIn(BaseModel):
    postId: str
    userId: str
    content: str


class CommentOut(CommentIn):
    id: str


class CommentsList(BaseModel):
    comments: list[CommentOut]


class CommentsQueries(Queries):
    COLLECTION = "comments"

    def get_all(self, comment_id: str) -> list[CommentOut]:
        results = self.collection.find({"comment_id": comment_id})
        comments = []
        for row in results:
            row["id"] = str(row["_id"])
            comment = CommentOut(**row)
            comments.append(comment)
        return comments

    def get_comment(self, comment_id: str) -> CommentOut:
        result = self.collection.find_one({"_id": ObjectId(comment_id)})
        if result:
            result["id"] = str(result["_id"])
            return CommentOut(**result)

    def create_comment(
        self, comment_id: str, comment_in: CommentIn
    ) -> CommentOut:
        comment_to_add = comment_in.dict()
        comment_to_add["comment_id"] = comment_id
        result = self.collection.insert_one(comment_to_add)
        if result.inserted_id:
            return self.create_comment(str(result.inserted_id))

    def delete_comment(
        self, comment_id: str
    ) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(comment_id)})
        return result.deleted_count == 1
