from models import FavoriteOut, FavoriteIn
from bson.objectid import ObjectId
from queries.client import Queries


class FavoritesQueries(Queries):
    DB_NAME = "User-favorites"
    COLLECTION = "favorites"

    def get_all(self) -> list[FavoriteOut]:
        results = self.collection.find()
        favorites = []
        for row in results:
            row["id"] = str(row["_id"])
            row["favorite"] = str(row["favorite"])
            favorite = FavoriteOut(row)
            favorites.append(favorite)
        return favorites

    def get_favorite(self, favorite_id: str) -> FavoriteOut:
        result = self.collection.find_one({"_id": ObjectId(favorite_id)})
        if result:
            result["id"] = str(result["_id"])
            result["favorite"] = str(result["_favorite"])
            return FavoriteOut(result)

    def create(self, favorite_in: FavoriteIn, account_id: str):
        favorite = favorite_in.dict()
        favorite["account_id"] = account_id
        search = self.collection.find_one(
            {"team_name": favorite["team_name"],
             "account_id": favorite["account_id"]}
            )
        if search:
            return search
        self.collection.insert_one(favorite)
        found = self.collection.find_one({"team_name": favorite["team_name"]})
        favorite["id"] = str(found["_id"])
        return favorite

    def delete(self, favorite_id: str, username) -> bool:
        try:
            result = self.collection.delete_one(
                {"_id": ObjectId(favorite_id), "username": username}
            )
            return result.deleted_count > 0
        except Exception:
            return False
