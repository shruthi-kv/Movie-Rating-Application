
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../Common/apis/movieApi";
import { APIkey } from "../../Common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {

    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${term}&type=movie`)

      return response.data;
  }
);


export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
       
    const response = await movieApi
      .get(`?apiKey=${APIkey}&s=${term}&type=series`)

      return response.data;
  }
);


export const fetchAsyncSeriesOrShowDetails = createAsyncThunk(
  "movies/fetchAsyncSeriesOrShowDetails",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIkey}&i=${id}&Plot=full`)

      return response.data;
  }
);


const initialState = {
  movies: {},
  shows:{},
  selectedMovieOrShow : {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow : (state) => {
        state.selectedMovieOrShow = {}
    }
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
    .addCase(fetchAsyncSeriesOrShowDetails.fulfilled, (state, { payload }) => {
      console.log("fetched successfully!");
      state.selectedMovieOrShow = payload; // directly mutate state (Immer handles it)
    })


}
});


export const { removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state ) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
