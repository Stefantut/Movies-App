import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./Variables";
import styled from 'styled-components';

import TopBar from './components/header/TopBar'
import AppHeader from './components/header/AppHeader'
import AppContent from './components/AppContent'
import AppFooter from './components/footer/AppFooter'

const StyledApp = styled.div`
background-color: ${props => props.theme.colors.darkgrey};
`

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // FetchMovies function to be re-used as many times we need
  const fetchMovies = async (path) => {
    setLoading(true);
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => {
          setMovies([...result.results])
          setCurrentPage(result.page)
          setTotalPages(result.total_pages)
        }
        );
      setLoading(false);


    } catch (error) {
      console.log("Error Fetching Api:" + error);
    }
  };
  // When initial page is loaded
  useEffect(() => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    fetchMovies(endpoint);
  }, []);

  return (
    <StyledApp className="App">
      <TopBar />
      <AppHeader movies={movies} />
      <AppContent
        movies={movies}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        fetchMovies={fetchMovies}
      />
      <AppFooter />
    </StyledApp>
  );
}
export default App;
