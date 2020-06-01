import React from 'react'
import styled from 'styled-components'
import SingleMovie from './singleMovie/SingleMovie'

const StyledUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${props => props.theme.spacers.large};
`
function AllMovies(props) {
    const { movies } = props;  // Destructure props in the function body
    return (
        <StyledUL className="all-movies">
            {/* Loop through all Movies and display each movie in a separate component  */}
            {movies &&
                movies.map((movie, index) => (
                    <SingleMovie
                        key={movie.id}
                        id={movie.id}
                        index={index}
                        title={movie.original_title || movie.original_title}
                        poster={movie.poster_path || movie.backdrop_path}
                        release={movie.release_date}
                    />
                ))}
        </StyledUL>
    )
}

export default AllMovies