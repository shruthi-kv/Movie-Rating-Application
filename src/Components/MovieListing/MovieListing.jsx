import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../Features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import SeriesCard from '../SeriesCard/SeriesCard';
import './MovieListing.scss';
import Slider from "react-slick";
import {settings} from '../../Common/settings'

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  

  let renderMovies, renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return  <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );


    renderShows = 
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
       return  <SeriesCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );
    

  return (
    <div className="movies-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
                <Slider {...settings}>{renderMovies}</Slider> 
            </div>
        </div>
         <div className="show-list">
            <h2>Shows</h2>
            <div className="series-container">
                {renderShows}
            </div>
        </div>

    </div>
  );
}
