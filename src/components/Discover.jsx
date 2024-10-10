import React from "react";
import Slider from "react-slick/lib/slider";
import displayMovies from "./displayMovies";
import AddToWatchList from "./AddToWatchList";
class Discover extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      selectedmovieId: "",
      selectedmovieOverview: "",
      selectedmovieName: "",
      watchlist: false,
      movieType: "",
    };
    this.addToWatchlistRef = React.createRef();
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
    const url = "https://api.themoviedb.org/3/discover/movie";
    this.getMovie(url);
  }

  handleSelectedMovie = (
    movieId,
    movieName,
    movieOverview,
    watchlist,
    movieType
  ) => {
    console.log(movieId, movieName, movieOverview, watchlist, movieType);
    this.setState({
      selectedmovieId: movieId,
      selectedmovieName: movieName,
      selectedmovieOverview: movieOverview,
      watchlist: !watchlist,
      movieType: movieType,
    });
  };

  handleAddToWatchList = () => {
    if (this.addToWatchlistRef.current) {
      this.addToWatchlistRef.current.handleAddToWatchList();
    }
  };

  render() {
    const { movieList, selectedmovieId, watchlist, movieType } = this.state;

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
              this.handleSelectedMovie,
              watchlist,
              this.handleAddToWatchList
            )}
          </Slider>
        </div>
        <AddToWatchList
          ref={this.addToWatchlistRef}
          mediaId={selectedmovieId}
          mediaType={movieType}
          watchlist={watchlist}
        />
      </>
    );
  }
}
export default Discover;
