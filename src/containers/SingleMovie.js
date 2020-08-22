import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import PosterImage from "./PosterImage";

import { IMAGE_URL, POSTER_SIZE } from "../utils/Variables";
import { europeanDateFormat } from "../utils/helpers";
import fallbackPoster from "../images/fallback-poster.jpg";

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacers.large} 0;
`;

const StyledTitle = styled.p`
  text-align: center;
  user-select: none;
  padding: ${(props) => props.theme.spacers.xsmall} 0;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledDate = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.lightgrey};
  user-select: none;
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
      <StyledTitle className="card__item card__item--title">
        {title}
      </StyledTitle>
      <StyledDate className="card__item card__item--release">
        Release Date: {europeanDateFormat(release)}
      </StyledDate>
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
