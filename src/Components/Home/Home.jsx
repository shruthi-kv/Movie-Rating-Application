import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";


import {useDispatch} from 'react-redux';

import {fetchAsyncMovies, fetchAsyncShows} from '../../Features/movies/movieSlice'


const Home = () => {

   const dispatch = useDispatch();
    const movieText = "Harry";
    const series = "Friends";

  useEffect(() => {
   dispatch(fetchAsyncMovies(movieText))

   dispatch(fetchAsyncShows(series))

  }, [dispatch]);


  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};
export default Home;
