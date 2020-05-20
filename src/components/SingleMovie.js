import React from "react";
import PosterImage from "./PosterImage";
import MovieTitle from "./MovieTitle";
import { IMAGE_URL, POSTER_SIZE } from "../Variables";
import ReleaseDate from "./ReleaseDate";

function SingleMovie(props) {
  return (
    <li className={`card card--${props.index}`}>
      <PosterImage
        url={`${IMAGE_URL}${POSTER_SIZE}` + props.movie.poster_path}
        title={props.movie.title}
      />
      <MovieTitle title={props.movie.title} />
      <ReleaseDate release={props.movie.release_date} />
    </li>
  );
}

export default SingleMovie;
