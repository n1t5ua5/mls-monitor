from pydantic import BaseModel
import requests
import os


class TeamQueries:
    def list_teams(self):
        url = "https://major-league-soccer-standings.p.rapidapi.com/"

        headers = {
            "X-RapidAPI-Key": os.environ["RAPID_API_KEY"],
            "X-RapidAPI-Host": "major-league-soccer-standings.p.rapidapi.com",
        }
        response = requests.get(self.url, headers=self.headers)
        data = response.json()
        return data

    def get_one_team_id(self, id: int):
        url = ""
        params = {"id": id}

        headers = {
            "X-RapidAPI-Key": os.environ["RAPID_API_KEY"],
            "X-RapidAPI-Host": "major-league-soccer-standings.p.rapidapi.com",
        }
        res = requests.get(url, headers=headers, params=params)

        data = res.json()
        return data
