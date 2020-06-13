import React from 'react'
import styled from 'styled-components';

import AllMovies from './AllMovies'
import LoadingSpinner from './LoadingSpinner';
import PageNumbers from './buttons/PageNumbers'

const StyledContent = styled.section`
  max-width: ${props => props.theme.content.medium};
  margin: ${props => props.theme.spacers.xxlarge} auto;
`

function AppContent({ movies, currentPage, totalPages, loading, fetchMovies, usedSearch, searchQuery, usedGenresFilter, selectedGenre }) {


    return (
        <StyledContent className="content">
            {loading && <LoadingSpinner />}
            {usedSearch && <p>You searched for: {searchQuery}</p>}
            <AllMovies movies={movies} />
            <PageNumbers
                currentPage={currentPage}
                totalPages={totalPages}
                fetchMovies={fetchMovies}
                usedSearch={usedSearch}
                searchQuery={searchQuery}
                selectedGenre={selectedGenre}
                usedGenresFilter={usedGenresFilter}
            />
        </StyledContent>
    )
}

export default AppContent