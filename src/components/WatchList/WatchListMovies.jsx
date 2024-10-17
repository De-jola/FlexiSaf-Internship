import React from "react";
import Slider from "react-slick/lib/slider";
import displayMovies from "../displayMovies";
class WatchListMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      selectedmovieId: "",
      selectedmovieOverview: "",
      selectedmovieName: "",
    };
  }

  getMovie(link) {
    fetch(link, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWNhMzlkMGMzOTZmMDhlYjBjZjllZDdlMGM4MjU3MiIsIm5iZiI6MTcyODQ4ODA1My4zMjE3ODcsInN1YiI6IjY3MDYzM2E3MDAzYzkyMTRhMGIzYTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I8V2i3fa2cLROcgGbqagpuqIHXCA7IfRU-MBHyrsro",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movieList: data.results,
        });
      });
  }
  componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/account/21561650/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc";
    this.getMovie(url);
  }

  handleSelectedMovie = (movieId, movieName, movieOverview) => {
    console.log(movieId, movieName, movieOverview);
    this.setState({
      selectedmovieId: movieId,
      selectedmovieName: movieName,
      selectedmovieOverview: movieOverview,
    });
  };

  render() {
    const { movieList } = this.state;

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
        <h3 className="text-2xl font-bold text-white">Movies </h3>
        {movieList.length === 0 ? (
          <p className="text-white">Add movies to your list</p>
        ) : (
          <div className="carousel-container px-6">
            <Slider {...settings}>
              {displayMovies(movieList, this.handleSelectedMovie)}
            </Slider>
          </div>
        )}
      </>
    );
  }
}
export default WatchListMovies;

// https://api.themoviedb.org/3/account/21561650/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc
