import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const initialState = {
  items: [],
  page: 1,
  total: 0,
  currentCamper: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;

        if (state.page > 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchCampers.pending, fetchCamperById.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
          state.errorMessage = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.fulfilled, fetchCamperById.fulfilled),
        (state) => {
          state.isLoading = false;
          state.isError = false;
          state.errorMessage = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchCampers.rejected, fetchCamperById.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload;
          state.items = [];
        }
      );
  },
});

export const { nextPage } = campersSlice.actions;
export default campersSlice.reducer;
