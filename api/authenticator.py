import os
from models import AccountOut
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries, AccountOutWithPassword
from passlib.context import CryptContext


class MyAuthenticator(Authenticator):
    def __init__(self, signing_key: str):
        super().__init__(signing_key)
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

    async def get_account_data(
        self,
        email: str,
        accounts: AccountQueries,
    ):
        return accounts.get(email)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: AccountOutWithPassword):
        return account.hashed_password

    def get_account_data_for_cookie(self, account: AccountOutWithPassword):
        return account.email, AccountOut(**account.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
