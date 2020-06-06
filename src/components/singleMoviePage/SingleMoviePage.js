import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL, IMAGE_URL } from "../../Variables";
import { convertToClassName } from '../../helpers'
import styled from 'styled-components';
import PropTypes from 'prop-types'

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
    const [loading, setLoading] = useState(false);
    const [prodCountries, setProdCountries] = useState([]);
    const [prodCompanies, setProdCompanies] = useState([]);

    // FetchMovies function to be re-used as many times we need
    const fetchMovie = async (path) => {
        setLoading(true);
        try {
            await fetch(path)
                .then((result) => result.json())
                .then((result) => {
                    setMovie(result)
                    setImageUrl(result.backdrop_path || result.poster_path)
                    setProdCountries(result.production_countries)
                    setProdCompanies(result.production_companies)
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

    // loop through production countries array and return each one
    const productionCountriesName = prodCountries.map((item, key) =>
        <li key={key} className={`pc__item pc__item--${convertToClassName(item.name)}`}>{item.name}</li>
    );

    // loop through production countries array and return each one
    const productionCompaniesName = prodCompanies.map((item, key) =>
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
                        budget={movie.budget}
                        revenue={movie.revenue}
                        genres={movie.genres}
                        websiteLink={movie.homepage}
                        productionCountries={productionCountriesName}
                        productionCompanies={productionCompaniesName}
                        release={movie.release_date}
                        language={movie.original_language}
                        spokenLanguages={movie.spoken_languages}
                        status={movie.status}
                    />}
                    <ReturnHome />
                </ContentWrap>}
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