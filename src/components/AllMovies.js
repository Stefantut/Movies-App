import React from 'react'
import styled from 'styled-components'
import SingleMovie from './singleMovie/SingleMovie'

const StyledUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
function AllMovies(props) {
    return (
        <StyledUL className="all-movies">
            {/* Loop through all Movies and display each movie in a separate component  */}
            {props.movies &&
                props.movies.map((movie, index) => (
                    <SingleMovie
                        key={movie.id}
                        index={index}
                        title={movie.title}
                        poster={movie.poster_path}
                        release={movie.release_date}
                    />
                ))}
        </StyledUL>
    )
}

export default AllMovies