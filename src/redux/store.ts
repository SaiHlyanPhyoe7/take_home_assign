"use client";

import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./feature/counter/counterSlice";
import pokimonSlice from "./feature/pokimon/pokimonSlice";
import cartSlice from "./feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokimon: pokimonSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
