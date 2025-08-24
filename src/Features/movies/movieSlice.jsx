
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../Common/apis/movieApi";
import { APIkey } from "../../Common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
       const movieText = "Harry";
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)

      return response.data;
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(fetchAsyncMovies.pending, () => {
      console.log("pending");
    })
    .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("fetched successfully!");
      state.movies = payload; // directly mutate state (Immer handles it)
    })
    .addCase(fetchAsyncMovies.rejected, () => {
      console.log("rejected");
    });
}
});


export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
