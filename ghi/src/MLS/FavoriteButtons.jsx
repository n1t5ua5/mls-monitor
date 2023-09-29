import {
  useGetFavoritesForAccountQuery,
  useDeleteFavoriteMutation,
  useCreateFavoriteMutation,
} from "./app/apiSlice";
import { useState, useEffect } from "react";


const FavoriteButtons = ({name}) => {
    const [deleteFavorite] = useDeleteFavoriteMutation();
    const [createFavorite] = useCreateFavoriteMutation();
    const [favorite, setFavorite] = useState();
    const { data: favorites } = useGetFavoritesForAccountQuery();

    useEffect(() => {
        if (favorites) {
            const match = favorites.find(f => f.team_name === name)
            setFavorite(match);
        }
    }, [favorites, name])

    return (
        <>
            {!favorite ? (
                <button
                    className="btn btn-success"
                    onClick={() => {
                        console.log("Trying to favorite:", name);
                        createFavorite({team_name: name})
                            .then(response => {
                                console.log("Successfully favorited:", response);
                            })
                            .catch(error => {
                                console.error("error, Error, ERROR!!!!:", error);
                            });
                    }}
                >
                    Favorite
                </button>
            ) : (
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        console.log("Trying to unfavorite:", name);
                        deleteFavorite(favorite)
                            .then(response => {
                                console.log("Successfully unfavorited:", response);
                            })
                            .catch(error => {
                                console.error("Error unfavoriting:", error);
                            });
                    }}
                >
                    Unfavorite
                </button>
            )}
        </>
    );
};

export default FavoriteButtons;
