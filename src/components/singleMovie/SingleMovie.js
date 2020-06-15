import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import styled from 'styled-components'

import PosterImage from "./PosterImage";
import MovieTitle from "./MovieTitle";
import { IMAGE_URL, POSTER_SIZE } from "../../Variables";
import ReleaseDate from "./ReleaseDate";
import fallbackPoster from '../../images/fallback-poster.jpg'


const StyledListItem = styled.li`
list-style-type: none;
display: flex;
flex-direction: column;
align-items: center;
padding: ${props => props.theme.spacers.large} 0;
`
function SingleMovie({ index, id, poster, title, release, genresIds, genresList }) {
  // loop through genres id array and return the name for each
  const allGenres = genresIds && genresIds.map((id) => {
    // if is equal to the id will rertun the name
    const filteredGenre = genresList && genresList.map((genre) =>
      (genre.id === id) ? genre.name : ''
    )
    return <div key={id} className={`genres__item genres__item--${id}`}>{filteredGenre}</div>
  }
  );

  return (
    <StyledListItem className={`card card--${index}`}>
      <Link to={`movies/${id}`} >
        <PosterImage
          url={(poster === null) ? fallbackPoster : `${IMAGE_URL}${POSTER_SIZE}${poster}`}
        />
      </Link>
      <MovieTitle title={title} />
      <ReleaseDate release={release} />
      {allGenres}
    </StyledListItem>
  );
}
SingleMovie.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  release: PropTypes.string,
};
export default SingleMovie;

