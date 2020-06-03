import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL, IMAGE_URL } from "../../Variables";
import styled from 'styled-components';

import AppTitle from '.././header/AppTitle'
import LoadingSpinner from '../LoadingSpinner';
import SingleMovieHeader from './SingleMovieHeader'
import ReturnHome from '../buttons/ReturnHome'
import fallbackHeader from './../../images/fallback-header.jpg'


const PageWrap = styled.div`
  background-color: ${props => props.theme.colors.darkgrey};`

const ContentWrap = styled.div`
width: 100%;
max-width: ${props => props.theme.content.medium};
margin: 0 auto;
`

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
            }, 600);

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
        <PageWrap>
            <AppTitle />
            {loading && <LoadingSpinner />}
            {!loading &&
                <ContentWrap>
                    {movie && <SingleMovieHeader
                        imageUrl={(movie.backdrop_path === null && movie.poster_path) ? fallbackHeader : `${IMAGE_URL}w1280${movie.backdrop_path || movie.poster_path}`}
                        title={movie.title}
                    />
                    }
                    <ReturnHome />
                </ContentWrap>}
        </PageWrap>
    )
}
export default SingleMoviePage