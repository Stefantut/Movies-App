import React from 'react'
import styled from 'styled-components';

import AllMovies from './AllMovies'
import PrevPageButton from './buttons/PrevPageButton'
import NextPageButton from './buttons/NextPageButton'
import { API_KEY, BASE_URL } from "../Variables";

const StyledContent = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`

function AppContent(props) {

    // to display next page movies
    const nextPage = () => {
        const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${props.currentPage + 1}`;
        props.fetchMovies(endpoint)
    }

    // to display previous page movies
    const prevPage = () => {
        const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${props.currentPage - 1}`;
        props.fetchMovies(endpoint)
    }

    return (
        <StyledContent className="content">
            <AllMovies movies={props.movies} />
            {props.loading && <div>Please wait... Loading</div>}
            {(props.currentPage > 1) ? <PrevPageButton prev={prevPage} /> : ''}
            {(props.currentPage !== props.totalPages) ? <NextPageButton next={nextPage} /> : ''}
        </StyledContent>
    )
}

export default AppContent