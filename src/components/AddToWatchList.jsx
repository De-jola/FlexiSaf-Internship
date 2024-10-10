import React from "react";
class AddToWatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  getMovies() {
    fetch(
      "https://api.themoviedb.org/3/account/21561650/watchlist?session_id=23dea02b58ace4ff4186e3c5ec074bcfb8ca381a",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWNhMzlkMGMzOTZmMDhlYjBjZjllZDdlMGM4MjU3MiIsIm5iZiI6MTcyODQ4ODA1My4zMjE3ODcsInN1YiI6IjY3MDYzM2E3MDAzYzkyMTRhMGIzYTM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5I8V2i3fa2cLROcgGbqagpuqIHXCA7IfRU-MBHyrsro",
        },

        body: JSON.stringify({
          media_type: this.props.mediaType,
          media_id: this.props.mediaId,
          watchlist: this.props.watchlist,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  handleAddToWatchList = () => {
    this.getMovies();
  };

  render() {
    return <></>;
  }
}
export default AddToWatchList;

//  {
//     "media_type":"tv",
//      "media_id":122653,
//     "watchlist":true
//     }
