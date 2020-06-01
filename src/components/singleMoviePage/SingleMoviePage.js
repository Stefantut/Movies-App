import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from "../../Variables";
import LoadingSpinner from '../LoadingSpinner';

function SingleMoviePage(props) {
    const [movie, setMovie] = useState({});
    // const [movieId, setMovieId] = useState('');
    const [loading, setLoading] = useState(false);

    // FetchMovies function to be re-used as many times we need
    const fetchMovie = async (path) => {
        setLoading(true);
        try {
            await fetch(path)
                .then((result) => result.json())
                .then((result) => {
                    setMovie(result)
                }
                );
            // Showing movies with a small delay to add spinner effect
            setInterval(() => {
                setLoading(false);
            }, 800);

        } catch (error) {
            console.log("Error Fetching Api:" + error);
        }
    };
    const id = props.match.params.movieId;
    // When initial page is loaded
    useEffect(() => {
        const endpoint = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
        fetchMovie(endpoint);
    }, [id]);
    return (
        <div>
            {loading && <LoadingSpinner />}
            {/* !loading && */}
            <h1>dsdas {movie.id}</h1>
            <h1>dsdas {movie.title}</h1>

        </div>
    )
}
export default SingleMoviePage