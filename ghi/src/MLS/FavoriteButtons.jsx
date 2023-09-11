import {
  useGetFavoritesForAccountQuery,
  useDeleteFavoriteMutation,
  useCreateFavoriteMutation,
} from "./app/apiSlice";
import { useState, useEffect } from "react";

const FavoriteButtons = ({ name }) => {
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const [createFavorite, createFavoriteStatus] = useCreateFavoriteMutation();
  const [favorite, setFavorite] = useState();
  const { data: favorites } = useGetFavoritesForAccountQuery();

  console.log({ createFavoriteStatus });

  useEffect(() => {
    if (favorites) {
      const match = favorites.find((f) => f.name === name);
      setFavorite(match);
    }
  }, [favorites]);

  return (
    <>
      {!favorite && (
        <button
          className="btn btn-success"
          onClick={() => createFavorite({ name: name })}
        >
          Favorite
        </button>
      )}
      {favorite && (
        <button
          className="btn btn-danger"
          onClick={() => deleteFavorite(favorite)}
        >
          Unfavorite
        </button>
      )}
    </>
  );
};

export default FavoriteButtons;
