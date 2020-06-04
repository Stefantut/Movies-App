import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Collection from './Content/Collection';

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

const SingleMovieContent = ({ collection }) => {
    return (
        <ContentWrap>
            <Collection collection={collection} />
        </ContentWrap>
    )
}

export default SingleMovieContent