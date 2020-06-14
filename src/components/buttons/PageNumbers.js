import React from 'react'
import { API_KEY, BASE_URL } from "../../Variables";
import PrevPageButton from './PrevPageButton'
import NextPageButton from './NextPageButton'

import styled from 'styled-components'

const PaginationWrap = styled.div`
margin-top: ${props => props.theme.spacers.xxlarge};
display: flex;
justify-content: center;
padding-bottom: ${props => props.theme.spacers.xlarge};
@media ${({ theme }) => theme.mediaQueries.below600}{
flex-wrap: wrap;
}
`
const StyledList = styled.ul`
display: flex;
align-items: center;
list-style-type: none;
margin: 0 ${props => props.theme.spacers.large};
color: ${props => props.theme.colors.tertiary};
user-select: none;
@media ${({ theme }) => theme.mediaQueries.below600}{
width:100%;
}
`

const StyleListItem = styled.li`
color: ${props => props.theme.colors.primary};
margin: 0 ${props => props.theme.spacers.xsmall};
padding: ${props => props.theme.spacers.xsmall} 0;
width: ${props => props.theme.spacers.xxxlarge};
display: flex;
justify-content: center;
align-items: center;
transition: 0.1s ease-in;
@media ${({ theme }) => theme.mediaQueries.below1024}{
    width: 100%;
    padding: ${props => props.theme.spacers.xsmall};
}
@media ${({ theme }) => theme.mediaQueries.below850}{
margin:0;
font-size: ${({ theme }) => theme.fontSizes.xsmall}
}
&.active{
    color: ${props => props.theme.colors.lightgrey};
    background-color: ${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.primary}
}
&:hover{
    cursor:pointer;
    color: ${props => props.theme.colors.tertiary};
  }
`;
function PageNumbers({ currentPage, totalPages, fetchMovies, usedSearch, searchQuery, usedGenresFilter, selectedGenre }) {
    // to display next page movies
    const nextPage = () => {
        let endpoint = '';
        switch (true) {
            case usedSearch:
                endpoint = `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`
                break;
            case usedGenresFilter:
                endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre.id}&page=${currentPage + 1}`
                break;
            default:
                endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${currentPage + 1}`
        }
        fetchMovies(endpoint)
    }

    // to display previous page movies
    const prevPage = () => {
        let endpoint = '';
        switch (true) {
            case usedSearch:
                endpoint = `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=${currentPage - 1}`
                break;
            case usedGenresFilter:
                endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre.id}&page=${currentPage - 1}`
                break;
            default:
                endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${currentPage - 1}`
        }
        fetchMovies(endpoint)
    }

    const handlePage = (page) => {
        let endpoint = '';
        switch (true) {
            case usedSearch:
                endpoint = `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=${page}`
                break;
            case usedGenresFilter:
                endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre.id}&page=${page}`
                break;
            default:
                endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${page}`
        }
        fetchMovies(endpoint)
    }

    const allPages = [];
    const dots = '...';

    function getAllPages() {
        for (let i = 1; i <= totalPages; i++) {
            let active = currentPage === i ? 'active' : '';
            allPages.push(
                <StyleListItem className={`page page--${i} ${active}`} key={i} onClick={() => handlePage(i)}>{i}</StyleListItem>
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

    // returns just the 10 pages around CurrentPage , 5 before and 5 after
    const tenPages = allPages.filter(function (item) {
        return item.key <= currentPage + 5 && item.key >= currentPage - 5;
    })

    // displays first element , the twenty pages and the last one
    const pageLinks = [firstPage, (currentPage > 7) ? dots : '', ...tenPages, (currentPage < totalPages - 6) ? dots : '', lastPage]

    return (
        <PaginationWrap>
            {(currentPage > 1) && <PrevPageButton prev={prevPage} />}
            <StyledList className="pagination">{pageLinks}</StyledList>
            {(currentPage !== totalPages) && <NextPageButton next={nextPage} />}
        </PaginationWrap>
    )
}

export default PageNumbers;