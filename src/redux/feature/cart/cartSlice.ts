import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Pokemon } from "@/type";

interface PokiMon {
  cartItem: Pokemon[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: PokiMon = {
  cartItem: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Pokemon>) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.stock > 0) {
          existingItem.quantity += 1;
          existingItem.stock -= 1;
          state.totalQuantity += 1;
          state.totalPrice = state.cartItem.reduce(
            (total, item) => total + item.quantity * item.price,
            0
          );
        }
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
        state.totalQuantity += 1;
        state.totalPrice += action.payload.price;
      }
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
