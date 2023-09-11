import React, { useState } from "react";
import { useGetAllTeamsQuery } from "./app/apiSlice";
import TeamCard from "./TeamCard";
import "./styles/Home.css";
function Home() {
  const { data: teams, isLoading, isError } = useGetAllTeamsQuery();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching teams.</div>;

  const sortedTeams =
    teams && Array.isArray(teams)
      ? [...teams].sort((a, b) => a.ranking - b.ranking)
      : [];

const handleSearchChange = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQuery(query);

const filtered = sortedTeams.filter(
    (team) =>
      team.team.name.toLowerCase().includes(query) ||
      team.stats.rank.toString().includes(query)
  );
  setFilteredTeams(filtered);
}

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
          <h2>Eastern Conference</h2>
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
          <h2>Western Conference</h2>
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
};

export default Home;
