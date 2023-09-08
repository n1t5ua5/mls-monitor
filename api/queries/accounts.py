from .client import Queries
from pymongo.errors import DuplicateKeyError
from models import AccountIn, AccountOutWithPassword


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):

    DB_NAME = "User-Account-Information"
    COLLECTION = "Accounts"

    def get(self, email: str) -> AccountOutWithPassword:
        props = self.collection.find_one({"email": email})
        props["id"] = str(props["_id"])
        return AccountOutWithPassword(**props)

    def create(
            self, info: AccountIn, hashed_password: str
            ) -> AccountOutWithPassword:
        exists = self.collection.find_one({"$or": [{"username": info.username}, {"email": info.email}]})
        if exists:
            raise DuplicateAccountError("Username or email already exists")
        props = info.dict()
        props["hashed_password"] = hashed_password
        del props["password"]
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return AccountOutWithPassword(**props)
