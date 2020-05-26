import React from "react";
import PropTypes from "prop-types";
import PosterImage from "./PosterImage";
import MovieTitle from "./MovieTitle";
import { IMAGE_URL, POSTER_SIZE } from "../../Variables";
import ReleaseDate from "./ReleaseDate";
import fallbackPoster from '../../images/fallback-poster.jpg'
function SingleMovie(props) {
  return (
    <li className={`card card--${props.index}`}>
      <PosterImage
        url={(props.poster === null) ? fallbackPoster : `${IMAGE_URL}${POSTER_SIZE}${props.poster}`}
        title={props.title}
      />
      <MovieTitle title={props.title} />
      <ReleaseDate release={props.release} />
    </li>
  );
}
SingleMovie.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  release: PropTypes.string,
};
export default SingleMovie;
