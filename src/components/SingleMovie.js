import React from "react";
import PosterImage from "./PosterImage";
import { IMAGE_URL, POSTER_SIZE } from "../Variables";

function SingleMovie(props) {
  const single = props.movies.map((movie, index) => (
    <li key={`${movie.title}-${index}`} className={`card card--${index}`}>
      <PosterImage
        url={`${IMAGE_URL}${POSTER_SIZE}` + movie.poster_path}
        title={movie.title}
      />
      <p className="movie__title">{movie.title}</p>
    </li>
  ));
  return <ul className="all-movies">{single}</ul>;
}

export default SingleMovie;
