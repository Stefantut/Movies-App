import React from 'react';
import styled from 'styled-components';

import Title from './Content/Title'
import Overview from './Content/Overview'
import Collection from './Content/Collection';
import Budget from './Content/Budget'
import Revenue from './Content/Revenue'
import Genres from './Content/Genres'
import Website from './Content/Website'
import ProductionCountries from './Content/ProductionCountries'
import ProductionCompanies from './Content/ProductionCompanies'
import ReleaseDate from './Content/ReleaseDate'
import Language from './Content/Language'
import SpokenLanguages from './Content/SpokenLanguages'
import Status from './Content/Status'
import ImdbLink from './Content/ImdbLink'

const ContentWrap = styled.section`
height:100%;
display: flex;
flex-direction: column;
align-items: flex-start;
z-index:0;
width: 100%;
max-width: ${props => props.theme.content.medium};
color: ${props => props.theme.colors.primary};
margin: ${props => props.theme.spacers.xxlarge} auto;
@media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: 0 ${props => props.theme.spacers.large}
}
`
const StyledTitle = styled.h2`
user-select:none;
font-family: ${props => props.theme.font.light};
margin-bottom: ${props => props.theme.spacers.medium};
color: ${props => props.theme.colors.light};
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.medium};
}
`

const SingleMovieContent =
    ({ title, overview, collection, budget, genres, websiteLink,
        productionCountries, productionCompanies, release, revenue, language, spokenLanguages, status, imdbId }) => {

        return (
            <ContentWrap>
                <StyledTitle>Movie details:</StyledTitle>
                {title && <Title title={title} />}
                {overview && <Overview overview={overview} />}
                {websiteLink && <Website websiteLink={websiteLink} title={title} />}
                {status && <Status status={status} />}
                {collection ? <Collection collection={collection} /> : ''}
                {budget && (budget >= 0 || budget === null) ? <Budget budget={budget} /> : ''}
                {revenue && (revenue >= 0 || revenue === null) ? <Revenue revenue={revenue} /> : ''}
                {genres && <Genres genres={genres} />}
                {productionCountries && <ProductionCountries productionCountries={productionCountries} />}
                {productionCompanies && <ProductionCompanies productionCompanies={productionCompanies} />}
                {release && <ReleaseDate release={release} />}
                {language && <Language language={language} />}
                {spokenLanguages && <SpokenLanguages spokenLanguages={spokenLanguages} />}
                {imdbId && <ImdbLink imdbId={imdbId} />}
            </ContentWrap>
        )
    }

export default SingleMovieContent
