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

const ContentWrap = styled.section`
height:100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
z-index:0;
color: ${props => props.theme.colors.primary};
margin: ${props => props.theme.spacers.xxlarge} 0;
`

const StyledTitle = styled.h2`
user-select:none;
font-family: ${props => props.theme.font.light};
margin-bottom: ${props => props.theme.spacers.medium};
color: ${props => props.theme.colors.light};
`

const SingleMovieContent =
    ({ title, overview, collection, budget, genres, websiteLink,
        productionCountries, productionCompanies, release, revenue, language, spokenLanguages, status }) => {

        return (
            <ContentWrap>
                <StyledTitle>Movie details:</StyledTitle>
                <Title title={title} />
                <Overview overview={overview} />
                <Website websiteLink={websiteLink} title={title} />
                {collection ? <Collection collection={collection} /> : ''}
                {(budget >= 0 || budget === null) ? '' : <Budget budget={budget} />}
                {(revenue >= 0 || revenue === null) ? '' : <Revenue revenue={revenue} />}
                <Genres genres={genres} />
                <ProductionCountries productionCountries={productionCountries} />
                <ProductionCompanies productionCompanies={productionCompanies} />
                <ReleaseDate release={release} />
                <Language language={language} />
                <SpokenLanguages spokenLanguages={spokenLanguages} />
                <Status status={status} />
            </ContentWrap>
        )
    }

export default SingleMovieContent
