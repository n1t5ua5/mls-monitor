
from pydantic import BaseModel
from typing import List


class TeamIn(BaseModel):
    name: str
    id: int


class TeamOut(BaseModel):
    team_id: int
    name: str
    logo: str
    abbreviation: str
    conference: str


class Stats(BaseModel):
    wins: int
    loses: int
    rank: int
    ties: int
    games_played: int
    goals_for: int
    goals_against: int
    points: int
    goal_difference: int


class AccountIn(BaseModel):
    email: str
    username: str
    password: str
    full_name: str


class AccountOut(BaseModel):
    id: str
    email: str
    username: str
    full_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class FavoriteIn(BaseModel):
    team_name: str


class FavoriteOut(FavoriteIn):
    id: str
    account_id: str


class FavoritesList(BaseModel):
    favorites: List[FavoriteOut]


class DeleteStatus(BaseModel):
    success: bool
