import { useParams } from "react-router-dom";
import React, { useState } from "react";

import {
  useGetTeamByNameQuery,
  //   useGetFavoritesForTeamsQuery,
  useGetTokenQuery,
} from "./app/apiSlice";

const TeamDetail = () => {
  const params = useParams();
  console.log(params, "W333333333");
  const [searchTerm, setSearchTerm] = useState("");
  const { data: teams, isLoading } = useGetTeamByNameQuery(
    params.name || searchTerm,
    "name"
  );
  // const { data: teams, isLoading } = useGetTeamByNameQuery(params.name, "name");
  //   const { data: favorites, isLoading: isLoadingFavorites } =
  //     useGetFavoritesForTeamsQuery(params.name);

  const handleSearch = () => {};

  if (isLoading) return <div>Loading...</div>;
  console.log(teams, "LLLLLLLLLLLLLLLLL");
  //   console.log(favorites, "1111111111111");

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>{teams.team.name}</h1>
        </div>
      </div>
      <div className="col-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <ul className="list-group">
        {/* <li className="list-group-item">Favorites: {favorites.length}</li> /}
        <li className="list-group-item">
          {" "}
          Record: {teams.stats.wins} - {teams.stats.losses}{" "}
        </li>
        <img
          src={teams.team.logo}
          alt={teams.team.logo}
          style={{ width: "200px", height: "200px" }}
        />
        {/ <li className="list-group-item">Order: {teams.order}</li> */}
      </ul>
    </div>
  );
};

export default TeamDetail;
