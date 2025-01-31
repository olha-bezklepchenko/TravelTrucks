import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./campers/slice.js";

export const store = configureStore({
  reducer: {
    campers: camperReducer,
  },
});
