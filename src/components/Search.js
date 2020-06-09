import React, { useState } from "react";
import { API_KEY, BASE_URL } from "../Variables";
import styled from 'styled-components'

function Search({ fetchMovies }) {
    const [searchTerm, setSearchTerm] = useState('');

    const fetchSearchedMovies = (query) => {
        const endpoint = `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)
    }

    const handleChange = (event) => {
        const searchedTerm = event.target.value;
        setSearchTerm(searchedTerm)
    }

    const handleClick = () => {
        fetchSearchedMovies(searchTerm)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchSearchedMovies(searchTerm)
        }
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={searchTerm} onKeyDown={handleKeyDown} placeholder='Search Movie' />
            <p onClick={handleClick}>Search</p>
        </div>

    )
}
export default Search