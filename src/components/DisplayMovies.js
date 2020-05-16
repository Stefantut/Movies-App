import React, { useState, useEffect } from "react";

const DisplayMovies = () => {
  const apiKey = process.env.REACT_APP_API;

  const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url);
          await res.json().then((res) => setMovies([...res.results]));
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, [url]);
    return { movies, error, loading };
  };
  const response = useFetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
  );
  const movies = response.movies;
  if (!movies) {
    return <div>Loading...</div>;
  }

  const singleMovie = movies.map((movie, index) => (
    <li key={`${movie.title}-${index}`} className="movie__title">
      {movie.title}
    </li>
  ));

  return (
    <div>
      <ul className="movies">{singleMovie}</ul>
    </div>
  );
};

export default DisplayMovies;
