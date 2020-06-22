import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL, IMAGE_URL } from "../../Variables";
import styled from 'styled-components';
import PropTypes from 'prop-types'

import TopBar from '../header/TopBar'
import LoadingSpinner from '../LoadingSpinner';
import SingleMovieHeader from './SingleMovieHeader'
import fallbackHeader from './../../images/fallback-header.jpg'
import SingleMovieContent from './SingleMovieContent'
import ReturnHome from '../buttons/ReturnHome'
import Enjoy from '../other/Enjoy'
import AppFooter from '../footer/AppFooter'

const PageWrap = styled.div`
  background-color: ${props => props.theme.colors.darkgrey};`


function SingleMoviePage(props) {
    const [movie, setMovie] = useState({});
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    // FetchMovies function to be re-used as many times we need
    const fetchMovie = async (path) => {
        setLoading(true);
        try {
            await fetch(path)
                .then((result) => result.json())
                .then((result) => {
                    setMovie(result)
                    setImageUrl(result.backdrop_path ? `${IMAGE_URL}w1280${result.backdrop_path}` : result.poster_path ? `${IMAGE_URL}w1280${result.poster_path}` : fallbackHeader)
                }
                );
            setLoading(false);

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

    // scrolls to top when page is loaded
    window.scrollTo(0, 0);
    return (
        <PageWrap>
            <TopBar />
            {loading && <LoadingSpinner />}
            {/* Header*/}
            {movie && imageUrl && <SingleMovieHeader
                imageUrl={imageUrl}
                title={movie.title || movie.original_title}
                tagline={movie.tagline}
                overview={movie.overview}
                vote={movie.vote_average}
            />
            }
            {/* Movie Details */}
            <ReturnHome />
            {movie && <SingleMovieContent
                title={movie.title || movie.original_title}
                collection={movie.belongs_to_collection}
                overview={movie.overview}
                budget={movie.budget}
                revenue={movie.revenue}
                genres={movie.genres}
                websiteLink={movie.homepage}
                productionCountries={movie.production_countries}
                productionCompanies={movie.production_companies}
                release={movie.release_date}
                language={movie.original_language}
                spokenLanguages={movie.spoken_languages}
                status={movie.status}
                imdbId={movie.imdb_id}
            />}
            <ReturnHome />
            <Enjoy />
            <AppFooter />
        </PageWrap>
    )
}

SingleMoviePage.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    vote: PropTypes.number,
    collection: PropTypes.array,
    budget: PropTypes.number,
    revenue: PropTypes.string,
    genres: PropTypes.array,
    websiteLink: PropTypes.string,
    productionCountries: PropTypes.array,
    productionCompanies: PropTypes.array,
    release: PropTypes.string,
    language: PropTypes.string,
    spokenLanguages: PropTypes.array,
    status: PropTypes.string,
}
export default SingleMoviePage