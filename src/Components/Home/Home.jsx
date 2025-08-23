import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../Common/apis/movieApi";
import { APIkey } from "../../Common/apis/movieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
        console.log(response)
    };
    fetchMovies()
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};
export default Home;
