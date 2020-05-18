import React from "react";
import { API_KEY, BASE_URL } from "../Variables";
import fetchApi from "../api/fetchApi";
import SingleMovie from "./SingleMovie";

const DisplayMovies = () => {
  const response = fetchApi.useFetch(
    `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
  );

  const movies = response.movies;

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="movies">
        <SingleMovie movies={movies} />
      </ul>
    </div>
  );
};

export default DisplayMovies;
