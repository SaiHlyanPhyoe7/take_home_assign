"use client";

import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./feature/counter/counterSlice";
import pokimonSlice from "./feature/pokimon/pokimonSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokimon: pokimonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
