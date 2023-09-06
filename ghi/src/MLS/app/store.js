import { configureStore } from '@reduxjs/toolkit';
import { mlsApi } from './MLS/app/apiSlice';
import searchReducer from "./MLS/app/searchSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        [mlsApi.reducerPath]: mlsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mlsApi.middleware)
})
