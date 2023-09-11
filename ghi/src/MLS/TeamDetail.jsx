import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllTeamsQuery, useGetTokenQuery } from "./app/apiSlice";

function TeamDetails() {
  const { name } = useParams()
  const { data: teams, isLoading, isError } = useGetAllTeamsQuery()
  const { data: account } = useGetTokenQuery();

  if (!account) {
    return <div>You must be logged in to view this page.</div>;
  }


  if (isLoading) return <div>Be patient </div>
  if (isError) return <div>Error getting team.</div>

  const team = teams.find((entry) => entry.team.name === name)
  console.log(team, "4444444")

  if(!team) return <div>Team not found.</div>

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>{team.team.name}</h1>
          <img src={team.team.logo} alt={team.team.logo} style={{ width: '200px', height: '200px' }} />
        </div>
      </div>
      <ul className="list-group">
        <li className="list-group-item">Abbreviation: {team.team.abbreviation}</li>
        <li className="list-group-item">Wins: {team.stats.wins}</li>
        <li className="list-group-item">Losses: {team.stats.losses}</li>
        <li className="list-group-item">Ties: {team.stats.ties}</li>
        <li className="list-group-item">Games Played: {team.stats.gamesPlayed}</li>
        <li className="list-group-item">Goals For: {team.stats.goalsFor}</li>
        <li className="list-group-item">Goals Against: {team.stats.goalsAgainst}</li>
        <li className="list-group-item">Points: {team.stats.points}</li>
        <li className="list-group-item">Rank: {team.stats.rank}</li>
        <li className="list-group-item">Goal Difference: {team.stats.goalDifference}</li>
      </ul>
    </div>
  );
};


export default TeamDetails;
