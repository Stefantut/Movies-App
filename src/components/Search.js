import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../Variables";
import styled from 'styled-components'

function Search({ fetchMovies, searchState }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searched, setSearched] = useState(false);
    const [error, setError] = useState('');

    const fetchSearchedMovies = (query) => {
        const endpoint = `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }

    const handleChange = (event) => {
        const searchedTerm = event.target.value;
        setSearchTerm(searchedTerm)
    }


    const handleClick = () => {
        if (searchTerm.length >= 1) {
            setSearched(true);
            fetchSearchedMovies(searchTerm);
            setError('');
        } else {
            setError('Please type in min 1 character')
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (searchTerm.length >= 1) {
                setSearched(true);
                fetchSearchedMovies(searchTerm);
                setError('');
            } else {
                setError('Please type min 1 character')
            }
        }
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        searchState(searched, searchTerm);
    });
    return (
        <div>
            <input type="text" onChange={handleChange} value={searchTerm} onKeyDown={handleKeyDown} placeholder='Search Movie' />
            <p onClick={handleClick}>Search</p><p className="error">{error}</p>
        </div>

    )
}
export default Search