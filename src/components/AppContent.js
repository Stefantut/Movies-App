import React from 'react'
import styled from 'styled-components';

import AllMovies from './AllMovies'
import LoadingSpinner from './LoadingSpinner'
import PrevPageButton from './buttons/PrevPageButton'
import NextPageButton from './buttons/NextPageButton'
import { API_KEY, BASE_URL } from "../Variables";

const StyledContent = styled.section`
  max-width: 1280px;
  margin: 0 auto;
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

    return (
        <StyledContent className="content">
            {loading && <LoadingSpinner />}
            {!loading &&
                <AllMovies movies={movies} />
            }
            {(currentPage > 1) ? <PrevPageButton prev={prevPage} /> : ''}
            {(currentPage !== totalPages) ? <NextPageButton next={nextPage} /> : ''}
        </StyledContent>
    )
}

export default AppContent