import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Title from './Content/Title'
import Collection from './Content/Collection';
import Budget from './Content/Budget'
import Genres from './Content/Genres'

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

const SingleMovieContent = ({ title, collection, budget, genres }) => {
    return (
        <ContentWrap>
            <StyledTitle>Movie details:</StyledTitle>
            <Title title={title} />
            {collection ? <Collection collection={collection} /> : ''}
            {(budget !== 0) ? <Budget budget={budget} /> : ''}
            <Genres genres={genres} />

        </ContentWrap>
    )
}

export default SingleMovieContent