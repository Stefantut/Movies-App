import React from "react";
import PosterImage from "./PosterImage";
import MovieTitle from "./MovieTitle";
import { IMAGE_URL, POSTER_SIZE } from "../Variables";
import ReleaseDate from "./ReleaseDate";

function SingleMovie(props) {
  const single = props.movies.map((movie, index) => (
    <li key={`${movie.title}-${index}`} className={`card card--${index}`}>
      <PosterImage
        url={`${IMAGE_URL}${POSTER_SIZE}` + movie.poster_path}
        title={movie.title}
      />

      <MovieTitle title={movie.title} />
      <ReleaseDate release={movie.release_date} />
    </li>
  ));
  return <ul className="all-movies">{single}</ul>;
}

export default SingleMovie;
