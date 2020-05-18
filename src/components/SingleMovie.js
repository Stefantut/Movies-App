import React from "react";
import PosterImage from "./PosterImage";
import { IMAGE_URL } from "../Variables";
function SingleMovie(props) {
  const single = props.movies.map((movie, index) => (
    <li key={`${movie.title}-${index}`} className={`card card--${index}`}>
      <PosterImage
        url={`${IMAGE_URL}w200` + movie.poster_path}
        title={movie.title}
      />
      <p className="movie__title">{movie.title}</p>
    </li>
  ));
  return <div>{single}</div>;
}

export default SingleMovie;
