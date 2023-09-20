from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import accounts, favorites, soccer


app = FastAPI()
app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(soccer.router)
app.include_router(favorites.router)

origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST")
]

origins = [origin for origin in origins if origin]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
