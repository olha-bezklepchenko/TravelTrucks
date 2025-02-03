import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers / fetchCampers",
  async ({ page, queryParams }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/?limit=4&page=${page}&${queryParams}`);
      return data;
    } catch (error) {
      if (error.response?.status === 404) {
        return thunkAPI.fulfillWithValue({ items: [], total: 0 });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
