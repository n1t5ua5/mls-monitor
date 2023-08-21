from pydantic import BaseModel
from typing import List, Optional


class Team(BaseModel):
    name: str
    logo: str
    abbreviation: str
    standings: str
    stats: str


class Standings(BaseModel):
    pass


class Stats(BaseModel):
    pass


class Conference(BaseModel):
    pass
