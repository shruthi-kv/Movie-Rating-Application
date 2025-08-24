import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import './MovieListing.scss'

export default function MovieListing() {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";
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
    console.log(renderMovies)

  return (
    <div className="movies-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
                {renderMovies}
            </div>
        </div>

    </div>
  );
}
