import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './features/numberSlice';
import usersReducer from './features/userSlice';
import authReducer from './features/authSlice';
import { apiSlice } from './features/api/apiSlice';
import { apiHousesSlice } from './features/api/apiHousesSlice';
import { apiColombiaSlice } from './features/api/apiColombiaSlice';

/** Agrupamos los estados en una sola ubicacion */

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiHousesSlice.reducerPath]: apiHousesSlice.reducer,
        [apiColombiaSlice.reducerPath]: apiColombiaSlice.reducer,
        number: numberReducer,
        users: usersReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(apiSlice.middleware)
        .concat(apiHousesSlice.middleware)
        .concat(apiColombiaSlice.middleware),
})

export default store;