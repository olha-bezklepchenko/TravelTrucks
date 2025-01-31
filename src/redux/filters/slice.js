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
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;
