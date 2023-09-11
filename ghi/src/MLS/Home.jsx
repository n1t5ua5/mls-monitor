import React, { useState } from "react";
import { useGetAllTeamsQuery } from "./app/apiSlice";
import TeamCard from "./TeamCard";
import "../styles/Home.css";

function Home() {
  const { data: teams, isLoading, isError } = useGetAllTeamsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching teams.</div>;

  const sortedTeams =
    teams && Array.isArray(teams)
      ? [...teams].sort((a, b) => a.ranking - b.ranking)
      : [];

  return (
    <div>
      <h1>THE MLS MONITOR</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a team or ranking"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "300px" }}
        />
      </div>
      <div className="team-card-container">
        <div className="team-card-column">
          <p>Eastern Conference</p>
          {(searchQuery ? filteredTeams : sortedTeams)
            .slice(0, 14)
            .map((entry) => (
              <TeamCard
                key={entry.team.name}
                name={entry.team.name}
                logo={entry.team.logo}
                ranking={entry.stats.rank}
                stats={{ wins: entry.stats.wins, losses: entry.stats.losses }}
              />
            ))}
        </div>
        <div className="team-card-column">
          <p>Western Conference</p>
          {(searchQuery ? filteredTeams : sortedTeams)
            .slice(15, 33)
            .map((entry) => (
              <TeamCard
                key={entry.team.name}
                name={entry.team.name}
                logo={entry.team.logo}
                ranking={entry.stats.rank}
                stats={{ wins: entry.stats.wins, losses: entry.stats.losses }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
