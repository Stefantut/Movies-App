import React from "react";
import "./App.css";
import { API_KEY, BASE_URL } from "./Variables";
import fetchApi from "./api/fetchApi";
import SingleMovie from "./components/SingleMovie";

function App() {
  const response = fetchApi.useFetch(
    `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
  );

  const movies = response.movies;

  if (!movies) {
    return <div>Loading...please wait</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Movies App</h2>
      </header>

      <ul className="all-movies">
        {/* Loop through all Movies and display each movie in a separate component  */}
        {movies.map((movie, index) => (
          <SingleMovie
            key={movie.id}
            index={index}
            title={movie.title}
            poster={movie.poster_path}
            release={movie.release_date}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
