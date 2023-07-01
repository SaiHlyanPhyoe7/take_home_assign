import { Pokemon } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokiMon {
  pokemons: Pokemon[];
  loadCount: number;
}

const initialState: PokiMon = {
  loadCount: 1,
  pokemons: [],
};

const pokimonSlice = createSlice({
  name: "pokimon",
  initialState,
  reducers: {
    addPokiData: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    incrementLoadCount: (state) => {
      state.loadCount += 1;
    },
    filterPokiData: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
  },
});

export const { addPokiData, incrementLoadCount, filterPokiData } =
  pokimonSlice.actions;

export default pokimonSlice.reducer;
