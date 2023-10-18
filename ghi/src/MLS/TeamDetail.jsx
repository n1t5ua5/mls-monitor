import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useGetAllTeamsQuery, useGetTokenQuery} from "./app/apiSlice";
import "./styles/TeamDetail.css";
import "./styles/Footer.css";
import Footer from "./Footer";
import TeamCard from "./TeamCard";


function TeamDetails() {
  const { name } = useParams()
  const { data: teams, isLoading, isError } = useGetAllTeamsQuery()
  const { data: account } = useGetTokenQuery();

  const [isFavorite, setIsFavorite]=useState(false);

  useEffect(() => {
    const favorites=JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(name));
  },[name]);

  if (!account) {
    return <h1>You must login to view this page.</h1>;
  }

  if (isLoading) return <div>Almost there... </div>
  if (isError) return <div>Error getting team.</div>

  const team = teams.find((entry) => entry.team.name === name);

  if(!team) return <div>Team not found.</div>

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav !== name);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(name);
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  };

  return (
    <div className="team-detail-container">
      <div>
        <div className="row">
          <TeamCard
            name={team.team.name}
            logo={team.team.logo}
            ranking={team.team.ranking} 
            stats={team.team.stats}
          />
        </div>
          <div className="col-8">
            <h1>{team.team.name}</h1>
            <img
              src={team.team.logo}
              alt={team.team.logo}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-4">
            <button
              onClick={toggleFavorite}
              className={isFavorite ? "btn btn-danger" : "btn btn-primary"}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            Abbreviation: {team.team.abbreviation}
          </li>
          <li className="list-group-item">Wins: {team.stats.wins}</li>
          <li className="list-group-item">Losses: {team.stats.losses}</li>
          <li className="list-group-item">Ties: {team.stats.ties}</li>
          <li className="list-group-item">
            Games Played: {team.stats.gamesPlayed}
          </li>
          <li className="list-group-item">Goals For: {team.stats.goalsFor}</li>
          <li className="list-group-item">
            Goals Against: {team.stats.goalsAgainst}
          </li>
          <li className="list-group-item">Points: {team.stats.points}</li>
          <li className="list-group-item">Rank: {team.stats.rank}</li>
          <li className="list-group-item">
            Goal Difference: {team.stats.goalDifference}
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
};


export default TeamDetails;
