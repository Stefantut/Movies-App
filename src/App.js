import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY, BASE_URL } from "./Variables";
import SingleMovie from "./components/SingleMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    fetchMovies(endpoint);
  }, []);

  // FetchMovies function to be reused as many times we need
  const fetchMovies = async (path) => {
    setLoading(true);
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => setMovies(result.results));
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching Api:" + error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Movies App</h2>
      </header>
      <ul className="all-movies">
        {/* Loop through all Movies and display each movie in a separate component  */}
        {movies &&
          movies.map((movie, index) => (
            <SingleMovie
              key={movie.id}
              index={index}
              title={movie.title}
              poster={movie.poster_path}
              release={movie.release_date}
            />
          ))}
      </ul>
      {loading && <div>Please wait... Loading</div>}

      {/* <button onClick={handleClick}>Load</button> */}
    </div>
  );
}
export default App;
