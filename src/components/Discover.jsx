import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick/lib/slider";
import displayMovies from "./displayMovies";
import AddToWatchList from "./AddToWatchList";
import useFetch from "../customHooks/useFetch";

function Discover() {
  const [movieList, setMovieList] = useState([]);
  const [selectedmovieId, setSelectedMovieId] = useState("");
  const [selectedmovieOverview, setSelectedMovieOverview] = useState("");
  const [selectedmovieName, setSelectedMovieName] = useState("");
  const [myWatchlist, setMyWatchlist] = useState(false);
  const [currentmovieType, setCurrentMovieType] = useState("");

  const addToWatchlistRef = useRef();
  useFetch("https://api.themoviedb.org/3/discover/movie", setMovieList);

  const handleSelectedMovie = (
    movieId,
    movieName,
    movieOverview,
    watchlist,
    movieType
  ) => {
    console.log(
      movieId,
      movieName,
      movieOverview,
      myWatchlist,
      currentmovieType
    );
    setSelectedMovieId(movieId);
    setSelectedMovieName(movieName);
    setSelectedMovieOverview(movieOverview);

    setMyWatchlist(!watchlist);
    setCurrentMovieType(movieType);
  };

  const handleAddToWatchList = () => {
    if (addToWatchlistRef.current) {
      addToWatchlistRef.current.handleAddToWatchList();
    }
  };

  const settings = {
    infinite: false, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 5, // Show 5 movies per slide
    slidesToScroll: 1, // Scroll 5 movies at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-white">Discover </h1>
      <div className="carousel-container px-6">
        <Slider {...settings}>
          {displayMovies(
            movieList,
            handleSelectedMovie,
            myWatchlist,
            handleAddToWatchList
          )}
        </Slider>
      </div>
      <AddToWatchList
        ref={addToWatchlistRef}
        mediaId={selectedmovieId}
        mediaType={currentmovieType}
        watchlist={myWatchlist}
      />
    </>
  );
}

export default Discover;
