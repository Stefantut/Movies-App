import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL, IMAGE_URL } from "../../Variables";
import { formatBudget, convertToClassName } from '../../helpers'
import styled from 'styled-components';

import AppTitle from '.././header/AppTitle'
import LoadingSpinner from '../LoadingSpinner';
import SingleMovieHeader from './SingleMovieHeader'
import SingleMovieContent from './SingleMovieContent'
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
    const [imageUrl, setImageUrl] = useState('');
    const [budget, setBudget] = useState('');
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [prodCountries, setProdCountries] = useState([]);

    // FetchMovies function to be re-used as many times we need
    const fetchMovie = async (path) => {
        setLoading(true);
        try {
            await fetch(path)
                .then((result) => result.json())
                .then((result) => {
                    setMovie(result)
                    setImageUrl(result.backdrop_path || result.poster_path)
                    setBudget(result.budget)
                    setGenres(result.genres)
                    setProdCountries(result.production_countries)
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

    // formatting budget before passing as prop
    const formattedBudget = formatBudget(budget);

    // loop through genres array and return each one
    const allGenres = genres.map((item) =>
        <li key={item.id} className={`genres__item genres__item--${convertToClassName(item.name)}`}>{item.name}</li>
    );
    // loop through production countries array and return each one
    const productionCountries = prodCountries.map((item, key) =>
        <li key={key} className={`pc__item pc__item--${convertToClassName(item.name)}`}>{item.name}</li>
    );

    return (
        <PageWrap>
            <AppTitle />
            {loading && <LoadingSpinner />}
            {!loading &&
                <ContentWrap>
                    {movie && imageUrl && <SingleMovieHeader
                        imageUrl={!imageUrl ? fallbackHeader : `${IMAGE_URL}w1280${imageUrl}`}
                        title={movie.title || movie.original_title}
                        tagline={movie.tagline}
                        overview={movie.overview}
                        vote={movie.vote_average}
                    />
                    }
                    {movie && <SingleMovieContent
                        title={movie.title || movie.original_title}
                        collection={movie.belongs_to_collection}
                        overview={movie.overview}
                        budget={formattedBudget}
                        genres={allGenres}
                        websiteLink={movie.homepage}
                        productionCountries={productionCountries}
                        release={movie.release_date}
                    />}
                    <ReturnHome />
                </ContentWrap>}
        </PageWrap>
    )
}

// add proptypes 
// add proptypes 
// add proptypes 
// add proptypes 
export default SingleMoviePage