import TeamCard from "./MLS/TeamCard";
import { useGetFavoritesForAccountQuery } from "./MLS/app/apiSlice";

const Favorites = () => {
    const { data: favorites, isLoading } = useGetFavoritesForAccountQuery()

    if (isLoading) return <div>Loading...</div>

    if (favorites) {
        return (<div className="row mt-3">
            {favorites.map(p => <TeamCard key={p.team_name} name={p.team_name} />)}
        </div>)
    }
    return <div>You don't have any useGetFavoritesForAccountQuery... yet</div>
}

export default Favorites;
