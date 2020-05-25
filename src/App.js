import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL, IMAGE_URL } from "./Variables";
import SingleMovie from "./components/SingleMovie";
import HeaderMovie from './components/header/HeaderMovie'
import NextPageButton from './components/buttons/NextPageButton';
import PrevPageButton from './components/buttons/PrevPageButton';

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
          setMovies([...result.results])
          setCurrentPage(result.page)
          setTotalPages(result.total_pages)
        }
        );
      // setLoading(false);
    } catch (error) {
      console.log("Error Fetching Api:" + error);
    }
  };
  // When initial page is loading
  useEffect(() => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    fetchMovies(endpoint);
  }, []);

  // to display next page movies
  const nextPage = () => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${currentPage + 1}`;
    fetchMovies(endpoint)
  }

  // to display previous page movies
  const prevPage = () => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${currentPage - 1}`;
    fetchMovies(endpoint)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='header__item header__item--title'>Movies App</h2>
        {/* Fix for rendering first and passes al data about first movie */}
        {
          movies[0] &&
          <HeaderMovie movie={movies[0]} url={`${IMAGE_URL}w1280${movies[0].backdrop_path}`} />
        }
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
      {(currentPage > 1) ? <PrevPageButton prev={prevPage} /> : ''}
      {(currentPage !== totalPages) ? <NextPageButton next={nextPage} /> : ''}
    </div>
  );
}
export default App;
