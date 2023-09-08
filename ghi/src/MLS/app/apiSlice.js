import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mlsApi = createApi({
  reducerPath: "mlsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_HOST,
  }),
  endpoints: (builder) => ({
    getAllTeams: builder.query({
      query: () => "/api/teams",
      transformResponse: (response) => response.teams,
    }),
    getTeamByName: builder.query({
      query: (name) => `/api/teams/${name}`,
    }),
    getFavoritesForTeams: builder.query({
      query: (name) => `/api/teams/${name}/favorites`,
      transformResponse: (response) => response.favorites,
      providesTags: (response, error, arg) => {
        return [{ type: "Favorites", id: arg }];
      },
      getFavoritesForAccount: builder.query({
        query: () => ({
          url: "/api/favorites/mine",
          credentials: "include",
        }),
        transformResponse: (response) => response.favorites,
        providesTags: [{ type: "Favorites", id: "MINE" }],
      }),
    }),
    deleteFavorite: builder.mutation({
      query: (favorite) => ({
        url: `/api/favorites/${favorite.id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidateTags: (response, error, arg) => {
        console.log({ response, error, arg });
        return [
          { type: "Favorites", id: "MINE" },
          { type: "Favorites", id: arg.pokemon_name },
        ];
      },
    }),
    createFavorite: builder.mutation({
      query: (body) => ({
        url: "api/favorites",
        body,
        method: "POST",
        credentials: "include",
      }),
      invalidateTags: (response, error, arg) => {
        return [
          { type: "Favorites", id: "ALL" },
          { type: "Favorites", id: arg.team_name },
        ];
      },
    }),
    getToken: builder.query({
      query: () => ({
        url: "/token",
        credentials: "include",
      }),
      transformResponse: (response) => response?.account || null,
      providesTags: ["Account"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
        credentials: "include",
      }),
      invalidateTags: ["Account", "Favorites"],
    }),
    login: builder.mutation({
      query: (info) => {
        const formData = new FormData();
        formData.append("username", info.email);
        formData.append("password", info.password);
        return {
          url: "/token",
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidateTags: ["Account", { type: "Favorites", id: "ALL" }],
    }),
    createAccount: builder.mutation({
      query: (body) => ({
        url: "/api/accounts",
        body,
        method: "POST",
        credentials: "include",
      }),
      invalidateTags: ["Account", { type: "Favorites", id: "ALL" }],
    }),
  }),
});

export const {
  useGetAllTeamsQuery,
  useGetTeamByNameQuery,
  useGetFavoritesForTeamsQuery,
  useGetFavoritesForAccountQuery,
  useDeleteFavoriteMutation,
  useCreateFavoriteMutation,
  useGetTokenQuery,
  useLoginMutation,
  useLogoutMutation,
  useCreateAccountMutation,
} = mlsApi;
