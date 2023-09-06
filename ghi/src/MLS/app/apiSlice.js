import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
        query: (name) => `/api/team/${name}`,
        }),
        getFavoritesForPokemon: builder.query({
        query: (name) => `/api/pokemon/${name}/favorites`,
        transformResponse: (response) => response.favorites,
        providesTags: (response, error, arg) => {
            return [{ type: "Favorites", id: arg }];
        },
        }),
        getCommentsForTeams: builder.query({
        query: (name) => `/api/teams/${name}/comments`,
        transformResponse: (response) => response.comments,
        providesTags: (response, error, arg) => {
            return [{ type: "Comments", id: arg }];
        },
        }),

        getComment: builder.query({
        query: (name) => `/api/team/${name}/comments`,
        transformResponse: (response) => response.comment,
        providesTags: (response, error, arg) => {
            return [{ type: "Comments", id: arg }];
        },
        }),
        getAllComments: builder.query({
        query: () => ({
            url: "/api/comments/all",
            credentials: "include",
        }),
        providesTags: [{ type: "Comments", id: "ALL" }],
        }),
        deleteComment: builder.mutation({
        query: (comment) => ({
            url: `/api/comments/${comment.id}`,
            method: "DELETE",
            credentials: "include",
        }),
        invalidateTags: (response, error, arg) => {
            console.log({ response, error, arg });
            return [
            { type: "Comments", id: "ALL" },
            { type: "Comments", id: arg.team_name },
            ];
        },
        }),
        createComment: builder.mutation({
        query: (body) => ({
            url: "api/comments",
            method: "POST",
            credentials: "include",
        }),
        invalidateTags: (response, error, arg) => {
            return [
            { type: "Comments", id: "ALL" },
            { type: "Comments", id: arg.team_name },
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
        invalidateTags: ["Account", "Comments"],
        }),
        login: builder.mutation({
        query: (info) => {
            const formData = new FormData();
            formData.append("username", info.username);
            formData.append("password", info.password);
            return {
            url: "/token",
            method: "POST",
            body: formData,
            credentials: "include",
            };
        },
        invalidateTags: ["Account", { type: "Comments", id: "ALL" }],
        }),
        signup: builder.mutation({
        query: (body) => ({
            url: "/api/accounts",
            method: "POST",
            credentials: "include",
        }),
        invalidateTags: ["Account", { type: "Comments", id: "ALL" }],
        }),
    }),
});


export const {
    useGetAllTeamsQuery,
    useGetTeamByNameQuery,
    useGetCommentsForTeamsQuery,
    useGetCommentQuery,
    useGetAllCommentsQuery,
    useDeleteCommentMutation,
    useCreateCommentQuery,
    useGetTokenQuery,
    useLoginMutation,
    useLogoutMutation,
    useSignupMutation,

} = mlsApi;
