import React, { useState, useEffect } from "react";
import "./App.css";
import { API_KEY, BASE_URL } from "./Variables";
import SingleMovie from "./components/SingleMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // FetchMovies function to be re-used as many times we need
  const fetchMovies = async (path) => {
    // setLoading(true);
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => {
          setMovies(result.results)
          setCurrentPage(result.page)
          setTotalPages(result.total_pages)
        }
        );
      // setLoading(false);
    } catch (error) {
      console.log("Error Fetching Api:" + error);
    }
  };

  useEffect(() => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    fetchMovies(endpoint);
  }, []);

  const nextPage = () => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${currentPage + 1}`;
    fetchMovies(endpoint)
  }
  const prevPage = () => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${currentPage - 1}`;
    fetchMovies(endpoint)
  }
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
      <button onClick={prevPage}>Prev Page</button>
      <button onClick={nextPage}>Next Page</button>

    </div>
  );
}
export default App;
