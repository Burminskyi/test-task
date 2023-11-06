import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const $instance = axios.create({
  baseURL: "https://6546500efe036a2fa955801e.mockapi.io/",
});

export const getCarsThunk = createAsyncThunk(
  "adverts/getCars",
  async (_, thunkApi) => {

    try {
      const { data } = await $instance.get('/adverts');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);