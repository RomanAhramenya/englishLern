import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slice/AuthSlice";
import WorldSlice from "./slice/WorldSlice";

export const store = configureStore({
    reducer:{
        user:AuthSlice,
        worlds:WorldSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch