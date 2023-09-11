import TeamCard from "./TeamCard";
import { useGetFavoritesForAccountQuery } from "./app/apiSlice";


const Favorites = () => {
    const { data: favorites, isLoading } = useGetFavoritesForAccountQuery()

    if (isLoading) return <div>Loading...</div>

    if (favorites) {
        return (<div className="row mt-3">
            {favorites.map(p => <TeamCard key={p.team_name} name={p.team_name} />)}
        </div>)
    }
    return <div>You don't have any favorites... yet</div>
}

export default Favorites;
