import React from 'react'
import { API_KEY, BASE_URL } from "../../Variables";
import PrevPageButton from './PrevPageButton'
import NextPageButton from './NextPageButton'

import styled from 'styled-components'

const PaginationWrap = styled.div`
margin-top: ${props => props.theme.spacers.xxlarge};
display: flex;
justify-content: center;
`
const StyledList = styled.ul`
display: flex;
align-items: center;
list-style-type: none;
margin: 0 ${props => props.theme.spacers.large};
color: ${props => props.theme.colors.secondary};
user-select: none;
`

const StyleListItem = styled.li`
color: ${props => props.theme.colors.primary};
margin: 0 ${props => props.theme.spacers.xsmall};
padding: ${props => props.theme.spacers.xsmall} 0;
width: ${props => props.theme.spacers.xxxlarge};
display: flex;
justify-content: center;
align-items: center;
&.active{
    color: ${props => props.theme.colors.lightgrey};
    background-color: ${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.primary}
}
&:hover{ cursor:pointer;}
`
function PageNumbers({ currentPage, totalPages, fetchMovies }) {
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
    let tenPages = allPages.filter(function (item) {
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