import React from "react";
import fetchApi from "../api/fetchApi";

const DisplayMovies = () => {
  const apiKey = process.env.REACT_APP_API;
  const baseURL = "https://api.themoviedb.org/3";
  const response = fetchApi.useFetch(
    `${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
  );

  const movies = response.movies;

  if (!movies) {
    return <div>Loading...</div>;
  }

  const singleMovie = movies.map((movie, index) => (
    <li key={`${movie.title}-${index}`} className={`card card--${index}`}>
      <p className="movie__title">{movie.title}</p>
    </li>
  ));

  return (
    <div>
      <ul className="movies">{singleMovie}</ul>
    </div>
  );
};

export default DisplayMovies;
