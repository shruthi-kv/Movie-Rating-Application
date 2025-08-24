
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


export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
       const series = "Friends";
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${series}&type=series`)

      return response.data;
  }
);


const initialState = {
  movies: {},
  shows:{}
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

    })
    .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("fetched successfully!");
      state.shows = payload; // directly mutate state (Immer handles it)
    })

    });

}
});


export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state ) => state.movies.shows;
export default movieSlice.reducer;
