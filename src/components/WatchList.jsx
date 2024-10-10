import React from "react";
import WatchListTv from "./WatchList/WatchListTv";
import WatchListMovies from "./WatchList/WatchListMovies";

class WatchList extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-3xl font-bold text-white">Watchlist</h1>
        <WatchListMovies />
        <WatchListTv />
      </>
    );
  }
}
export default WatchList;
