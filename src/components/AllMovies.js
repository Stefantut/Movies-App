import React from 'react'
import styled from 'styled-components'
import SingleMovie from './singleMovie/SingleMovie'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../css/animations.css'
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${props => props.theme.spacers.large};
`
function AllMovies(props) {
    const { movies } = props;  // Destructure props in the function body
    return (

        <TransitionGroup component={StyledList}>

            {/* Loop through all Movies and display each movie in a separate component  */}
            {movies &&
                movies.map((movie, index) => (
                    <CSSTransition key={movie.id} timeout={300} classNames="fade">
                        <SingleMovie
                            key={movie.id}
                            id={movie.id}
                            index={index}
                            title={movie.original_title || movie.original_title}
                            poster={movie.poster_path || movie.backdrop_path}
                            release={movie.release_date}
                        />
                    </CSSTransition>
                ))}

        </TransitionGroup>

    )
}

export default AllMovies