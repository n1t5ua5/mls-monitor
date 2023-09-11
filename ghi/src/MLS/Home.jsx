import React from "react";
import TeamList from "./TeamList";
import { useGetAllTeamsQuery } from "./app/apiSlice";
import TeamCard from "./TeamCard";

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
      <p>Welcome</p>
      <div className="row mt-3">
        {sortedTeams.map((entry) => (
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
  );
}

export default Home;
