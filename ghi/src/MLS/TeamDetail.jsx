import { useParams } from "react-router-dom";
import {
    useGetTeamByNameQuery,
    //   useGetFavoritesForTeamsQuery,
    useGetTokenQuery,
    } from "./app/apiSlice";

    const TeamDetail = () => {
    const params = useParams();
    console.log(params, "W333333333");
    const { data: teams, isLoading } = useGetTeamByNameQuery(params.name);
    //   const { data: favorites, isLoading: isLoadingFavorites } =
    //     useGetFavoritesForTeamsQuery(params.name);

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
        {/* <ul className="list-group">
            <li className="list-group-item">Favorites: {favorites.length}</li>
            <li className="list-group-item">Stats: {teams.length}</li>
            <li className="list-group-item">Order: {teams.order}</li>
        </ul> */}
        </div>
    );
};

export default TeamDetail;
