import { configureStore } from '@reduxjs/toolkit';
import { mlsApi } from './apiSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        [mlsApi.reducerPath]: mlsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mlsApi.middleware)
})
