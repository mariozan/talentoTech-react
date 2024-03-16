import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './features/numberSlice';
import usersReducer from './features/userSlice';

/** Agrupamos los estados en una sola ubicacion */

const store = configureStore({
    reducer: {
        number: numberReducer,
        users: usersReducer,
    }
})

export default store;