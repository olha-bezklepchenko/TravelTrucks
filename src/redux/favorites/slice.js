import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    changeStatusFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((item) => item !== id);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { changeStatusFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
