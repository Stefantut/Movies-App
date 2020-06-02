import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from "../../Variables";
import LoadingSpinner from '../LoadingSpinner';

function SingleMoviePage(props) {
    const [movie, setMovie] = useState({});
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

    // gets the id from router props
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
            <h3>{movie.title}</h3>
            <div className="budget">Budget: {movie.budget}</div>
            <p className="overview">{movie.overview}</p>
            <p className="popularity">{movie.popularity}</p>
        </div>
    )
}
export default SingleMoviePage