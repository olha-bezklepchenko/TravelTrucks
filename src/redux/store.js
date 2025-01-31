import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    filters: filtersReducer,
  },
});
