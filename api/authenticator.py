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

    def verify_password(self, plain_password, hashed_password):
        plain_password_bytes = plain_password.encode("utf-8")
        hashed_password_bytes = (
            hashed_password.encode("utf-8")
            if isinstance(hashed_password, str)
            else hashed_password
        )
        if '$' in hashed_password and isinstance(hashed_password, str):
            parts = hashed_password.split('$')
            parts = [p.encode('utf-8') for p in parts]
            hashed_password_bytes = b'$'.join(parts)

        return self.pwd_context.verify(
            plain_password_bytes, hashed_password_bytes
        )


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
