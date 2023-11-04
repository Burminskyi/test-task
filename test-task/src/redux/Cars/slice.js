import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './operations';

const initialState = {
  isLoading: false,
  allCars: [],
  favoriteCars: [],
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFavoriteCars: (state, action) => {
      state.favoriteCars.push(action.payload);
    },
    removeFromFavoriteCars: (state, action) => {
      state.favoriteCars = state.favoriteMovies.filter(
        (car) => car.id !== action.payload
      );
    },
  },

  extraReducers: (builder) =>
    builder
      // -----------GET CARS-------------
      .addCase(getCarsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCars = action.payload;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const { setFavoriteCars, removeFromFavoriteCars } = carsSlice.actions;


export const carsReducer = carsSlice.reducer;
