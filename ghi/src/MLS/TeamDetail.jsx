import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTeamByNameQuery, useGetFavoritesForTeamsQuery, useGetTokenQuery } from 'mls/app/apiSlice';
import { Link } from "react-router-dom";
import FavoriteButton from "mls/FavoriteButtons.jsx";

const TeamDetails = () => {
    const {data: account } = useGetTokenQuery();
    const { name } = useParams();
    const { data: teams, isLoading } = useGetTeamByNameQuery(name);
    const { data: favorites, isLoading: isLoadingFavorites } = useGetFavoritesForTeamsQuery(name);

    if (isLoading || isLoadingFavorites) return <div>Loading...</div>

    return (
        <div>
        <div className="row">
            <div className="col-8">
                <h1>{teams.name.toUpperCase()}</h1>
            </div>
            <div className="col-4 text-end">
                {account ? <FavoriteButton name={name} /> : <Link to={'/login'} className="btn btn-outline-primary">Login</Link>}
            </div>
        </div>
        <ul className="list-group">
            <li className="list-group-item">
                Favorites: {favorites.length}
            </li>
            <li className="list-group-item">
                Stats: {teams.length}
            </li>
            <li className="list-group-item">
                Order: {teams.order}
            </li>
        </ul>
        </div>
    )
}

export default TeamDetails;
