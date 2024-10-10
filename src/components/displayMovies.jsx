import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { BiSolidHeart } from "react-icons/bi";

const displayMovies = (
  movies,
  handleSelectedMovie,
  watchlist,
  handleAddToWatchList
) => {
  return movies.map((movie) => {
    const movieType = movie.title ? "movie" : "tv";
    return (
      <div
        key={movie.id}
        className="movie-tile py-8 px-4"
        onClick={() => {
          handleSelectedMovie(
            movie.id,
            movie.title || movie.name,
            movie.overview,
            watchlist,
            movieType
          );
          handleAddToWatchList();
        }}
      >
        <img
          className=" movie-poster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />

        <div className="movie-detail-box p-3 max-h-20 flex justify-between">
          <p>
            <BiInfoCircle className="cursor-pointer" />
          </p>
          <p>
            <FaRegHeart className="cursor-pointer" />
          </p>
        </div>
      </div>
    );
  });
};
export default displayMovies;
