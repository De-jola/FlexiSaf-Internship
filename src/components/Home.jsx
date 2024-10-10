import React from "react";

import Discover from "./Discover";
import WatchList from "./WatchList";
import Popular from "./Popular";
import Trending from "./Trending";
import TvSeries from "./Tv Series";
import DiscoverTv from "./DiscoverTv";
class Home extends React.Component {
  render() {
    return (
      <>
        <main className="p-8">
          <Discover />
          <WatchList />
          <Popular />
          <Trending />
          <TvSeries />
          <DiscoverTv />
        </main>
      </>
    );
  }
}

export default Home;
