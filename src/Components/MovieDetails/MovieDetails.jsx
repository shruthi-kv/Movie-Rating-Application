import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncSeriesOrShowDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow
} from "../../Features/movies/movieSlice";
import './MovieDetails.scss'

export default function MovieDetails() {
  const { imbbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncSeriesOrShowDetails(imbbID));

    return () => {
        dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imbbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Voting <i className="fa fa-thumbs-up"></i> : {data.imbdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
           <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
}
