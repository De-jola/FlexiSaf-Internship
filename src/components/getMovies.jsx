const getMovies = (link) => {
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
};
export default getMovies;
