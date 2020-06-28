import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import PosterImage from "./PosterImage";
import MovieTitle from "./MovieTitle";
import { IMAGE_URL, POSTER_SIZE } from "../../Variables";
import ReleaseDate from "./ReleaseDate";
import fallbackPoster from "../../images/fallback-poster.jpg";

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacers.large} 0;
`;
function SingleMovie({
  index,
  id,
  poster,
  title,
  release,
  genresIds,
  genresList,
}) {
  return (
    <StyledListItem
      className={`card card--${index}`}
      title="Click to find out more"
    >
      <Link to={`movies/${id}`}>
        <PosterImage
          url={
            poster === null
              ? fallbackPoster
              : `${IMAGE_URL}${POSTER_SIZE}${poster}`
          }
          genresIds={genresIds}
          genresList={genresList}
        />
      </Link>
      <MovieTitle title={title} />
      <ReleaseDate release={release} />
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
