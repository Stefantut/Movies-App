import React from "react";
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";
import styled from 'styled-components'

import PosterImage from "./PosterImage";
import MovieTitle from "./MovieTitle";
import { IMAGE_URL, POSTER_SIZE } from "../../Variables";
import ReleaseDate from "./ReleaseDate";
import fallbackPoster from '../../images/fallback-poster.jpg'

const StyledLI = styled.li`
list-style-type: none;
display: flex;
flex-direction: column;
align-items: center;
padding: ${props => props.theme.spacers.large} 0;
`
function SingleMovie({ index, id, poster, title, release }) {
  return (
    <StyledLI className={`card card--${index}`}>
      <NavLink to={`movies/${id}`}>
        <PosterImage
          url={(poster === null) ? fallbackPoster : `${IMAGE_URL}${POSTER_SIZE}${poster}`}
          title={title}
        />
        <MovieTitle title={title} />
        <ReleaseDate release={release} />
      </NavLink>
    </StyledLI>
  );
}
SingleMovie.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  release: PropTypes.string,
};
export default SingleMovie;

