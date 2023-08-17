from pymongo import MongoClient
import os

DATABASE_URL = os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME")

client = MongoClient(DATABASE_URL)
db = client[DB_NAME]


class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
