import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../utils/Variables";
import styled from "styled-components";

import TopBar from "../containers/TopBar";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import Enjoy from "../components/misc/Enjoy";
import AppFooter from "./AppFooter";
import FilterGenres from "../components/buttons/FilterGenres";
import SelectedGenre from "./SelectedGenre";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.darkgrey};
`;

function App(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [usedSearch, setUsedSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [usedGenresFilter, setUsedGenresFilter] = useState(false);

  // FetchMovies function to be re-used as many times we need
  const fetchMovies = async (path) => {
    setLoading(true);
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => {
          setMovies([...result.results]);
          setCurrentPage(result.page);
          setTotalPages(result.total_pages);
        });
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching Api:" + error);
    }
  };

  // FetchGenres function to be re-used as many times we need
  const fetchGenres = async (path) => {
    setLoading(true);
    try {
      await fetch(path)
        .then((result) => result.json())
        .then((result) => {
          setGenres([...result.genres]);
        });
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching Api:" + error);
    }
  };

  // When initial page is loaded
  useEffect(() => {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    fetchMovies(endpoint);
    const endpointGenres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    fetchGenres(endpointGenres);
  }, []);

  // to set the state in child component
  function setSearchState(boolean, query) {
    setUsedSearch(boolean);
    setSearchQuery(query);
  }

  // gets the path from Router
  // to be able to pass it to top bar and hide search on other pages
  const path = props.location.pathname;

  // Genres
  const handleGenre = (genre) => {
    const endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`;
    fetchMovies(endpoint);
    setSelectedGenre(genre);
    setUsedGenresFilter(true);
  };

  // To clear the filter and fetch on load page
  function clearGenreFilter() {
    const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
    fetchMovies(endpoint);
    setUsedGenresFilter(false);
  }
  return (
    <StyledApp className="App">
      <TopBar
        fetchMovies={fetchMovies}
        searchState={setSearchState}
        path={path}
      />
      <AppHeader movies={movies} />
      {!loading && !usedSearch && (
        <FilterGenres
          handleGenre={handleGenre}
          genres={genres}
          selectedGenre={selectedGenre.id}
          clearGenreFilter={clearGenreFilter}
          usedGenresFilter={usedGenresFilter}
        />
      )}{" "}
      {/* hides filter on Search result page  */}
      {usedGenresFilter && !usedSearch && (
        <SelectedGenre genre={selectedGenre.name} />
      )}
      <AppContent
        movies={movies}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        fetchMovies={fetchMovies}
        usedSearch={usedSearch}
        searchQuery={searchQuery}
        selectedGenre={selectedGenre}
        usedGenresFilter={usedGenresFilter}
        genresList={genres}
      />
      <Enjoy />
      <AppFooter />
    </StyledApp>
  );
}
export default App;
