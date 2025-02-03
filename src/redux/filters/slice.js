import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  features: [],
  form: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { changeFilters, resetFilters } = slice.actions;
export default slice.reducer;
