import React from 'react'
import styled from 'styled-components';

import AllMovies from './AllMovies'
import LoadingSpinner from './LoadingSpinner'
import PrevPageButton from './buttons/PrevPageButton'
import NextPageButton from './buttons/NextPageButton'
import { API_KEY, BASE_URL } from "../Variables";

const StyledContent = styled.section`
  max-width: 1280px;
  margin: ${props => props.theme.spacers.xxlarge} auto;
`

function AppContent({ movies, currentPage, totalPages, loading, fetchMovies }) {

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

    const handlePage = (page) => {
        const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`;
        fetchMovies(endpoint)
    }
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
        let active = currentPage === i ? 'active' : '';
        pageLinks.push(<li className={`page page--${i} ${active}`} key={i} onClick={() => handlePage(i)}>{i}</li>)
    }
    return (
        <StyledContent className="content">
            {loading && <LoadingSpinner />}
            {!loading && <AllMovies movies={movies} />}
            {(currentPage > 1) && <PrevPageButton prev={prevPage} />}
            {(currentPage !== totalPages) && <NextPageButton next={nextPage} />}
            {pageLinks}
        </StyledContent>
    )
}

export default AppContent