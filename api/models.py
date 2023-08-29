from pydantic import BaseModel
from typing import List, Optional
from jwtdown_fastapi.authentication import Token


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
