import React from 'react'
import styled from 'styled-components';

import AllMovies from './AllMovies'
import LoadingSpinner from './LoadingSpinner';
import PageNumbers from './buttons/PageNumbers'
import MovieNotFound from '../components/singleMovie/MovieNotFound';

const StyledContent = styled.section`
  max-width: ${props => props.theme.content.medium};
  margin: ${props => props.theme.spacers.xxlarge} auto;
`
const SearchTitle = styled.p`
margin-bottom: ${props => props.theme.spacers.large};
user-select: none;
color: ${props => props.theme.colors.lightgrey};
font-size:${props => props.theme.fontSizes.medium};
span{
    color: ${props => props.theme.colors.primary};
}
`

function AppContent({ movies, currentPage, totalPages, loading, fetchMovies, usedSearch, searchQuery, usedGenresFilter, selectedGenre, genresList }) {
    return (
        <StyledContent className="content">
            {loading && <LoadingSpinner />}
            {usedSearch && <SearchTitle>You searched for: <span>{(searchQuery.length > 0) ? searchQuery : 'Please type in at least 1 character'}</span></SearchTitle>}
            {(movies.length > 0) ?
                <AllMovies movies={movies} genresList={genresList} /> :
                !loading && <MovieNotFound />}
            {(totalPages > 0) ? <PageNumbers
                currentPage={currentPage}
                totalPages={totalPages}
                fetchMovies={fetchMovies}
                usedSearch={usedSearch}
                searchQuery={searchQuery}
                selectedGenre={selectedGenre}
                usedGenresFilter={usedGenresFilter}
            /> : ''}
        </StyledContent>
    )
}

export default AppContent