from pydantic import BaseModel
import requests
import os
from typing import Optional


class TeamQueries:
    def list_teams(self):
        BASE_URL = "https://major-league-soccer-standings.p.rapidapi.com/"
        headers = {
            "X-RapidAPI-Key": os.environ["API_KEY"],
            "X-RapidAPI-Host": "major-league-soccer-standings.p.rapidapi.com",
        }
        response = requests.get(BASE_URL, headers=headers)
        data = response.json()
        return data

    def get_team_details(self, name: str) -> Optional[dict]:
        data = self.list_teams()
        all_teams = []

        for conference in data:
            for entry in conference["entries"]:
                all_teams.append(entry)

        for team in all_teams:
            if team["team"]["name"] == name:
                return team
