import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../utils/Variables";
import styled from "styled-components";
import { ReactComponent as SearchImage } from "../images/search.svg";

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
`;
const StyledInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.primary};
  caret-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacers.xsmall};
  border-radius: 5px;
  &::placeholder {
    padding-left: ${(props) => props.theme.spacers.xsmall};
    color: ${(props) => props.theme.colors.primary};
  }
  &:focus {
    outline: thin;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const SearchButton = styled.div`
  margin-left: ${(props) => props.theme.spacers.small};
  svg {
    max-height: 20px;
    max-width: 20px;
    filter: invert(1);
    transition: 0.2s ease-in;
  }
  &:hover {
    cursor: pointer;
    svg {
      transform: rotate(-30deg);
    }
  }
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  margin-right: ${(props) => props.theme.spacers.small};
  user-select: none;
  font-family: ${(props) => props.theme.font.bold};
`;

function Search({ fetchMovies, searchState }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const fetchSearchedMovies = (query) => {
    const endpoint = `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  };
  // saves in state what was typed in
  const handleChange = (event) => {
    const searchedTerm = event.target.value;
    setSearchTerm(searchedTerm);
  };

  // just on click of the search button
  const handleClick = () => {
    if (searchTerm.length >= 1) {
      setSearched(true);
      fetchSearchedMovies(searchTerm);
      setError("");
    } else {
      setError("Please type in min 1 character");
    }
  };
  // just when Enter key is pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchTerm.length >= 1) {
        setSearched(true);
        fetchSearchedMovies(searchTerm);
        setError("");
      } else {
        setError("Please type min 1 character");
      }
    }
  };

  // Updates the state in App component
  useEffect(() => {
    searchState(searched, searchTerm);
  });

  return (
    <SearchWrap>
      <ErrorMessage className="error">{error}</ErrorMessage>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={searchTerm}
        onKeyDown={handleKeyDown}
        placeholder="Search Movie"
      />
      <SearchButton onClick={handleClick}>
        <SearchImage />
      </SearchButton>
    </SearchWrap>
  );
}
export default Search;
