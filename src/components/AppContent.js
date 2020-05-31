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

    const allPages = [];
    const dots = '...';


    function getAllPages() {
        for (let i = 1; i <= totalPages; i++) {
            let active = currentPage === i ? 'active' : '';
            allPages.push(
                <li className={`page page--${i} ${active}`} key={i} onClick={() => handlePage(i)}>{i}</li>
            )
        }
    }

    getAllPages();

    // gets out first element from array 
    const firstPage = allPages.shift();

    // gets last element from array 
    const lastPage = allPages[allPages.length - 1];

    // removes duplicate last element from array
    allPages.pop();

    // returns just the 20 pages around CurrentPage
    let twentyPages = allPages.filter(function (item) {
        return item.key <= currentPage + 19 && item.key > currentPage - 1;
    })

    // displays first element , othersand the last one
    const pageLinks = [firstPage, (currentPage > 1) ? dots : '', ...twentyPages, (currentPage < totalPages) ? dots : '', lastPage]

    return (
        <StyledContent className="content">
            {loading && <LoadingSpinner />}
            {!loading && <AllMovies movies={movies} />}
            {(currentPage > 1) && <PrevPageButton prev={prevPage} />}
            <ul className="pagination">{pageLinks}</ul>
            {(currentPage !== totalPages) && <NextPageButton next={nextPage} />}
        </StyledContent>
    )
}

export default AppContent