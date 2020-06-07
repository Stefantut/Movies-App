import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Overlay from '../misc/Overlay'
import HeaderTitle from './Header/HeaderTitle'
import HeaderTagline from './Header/HeaderTagline'
import HeaderOverview from './Header/HeaderOverview'
import HeaderVote from './Header/HeaderVote'

const HeaderWrap = styled.header`
background-color: ${props => props.theme.colors.dark};
height:100%;
width: 100%;
border-bottom: 5px solid ${props => props.theme.colors.secondary};
box-shadow: 0px 6px 28px 3px rgba(0,0,0,0.7);
`

const Header = styled.div`
position: relative;
min-height: 550px;
max-width: ${props => props.theme.content.medium};
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-repeat: no-repeat;
z-index:0;
`

const StyledTop = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding: 0 ${ props => props.theme.spacers.xtralarge};
@media ${({ theme }) => theme.mediaQueries.below1024}{
    padding: 0 ${ props => props.theme.spacers.xlarge};
}
@media ${({ theme }) => theme.mediaQueries.below768}{
    flex-wrap: wrap;
}
`

const SingleMovieHeader = ({ imageUrl, title, tagline, overview, vote }) => {
    return (
        <HeaderWrap>
            <Header imageUrl={imageUrl}>
                <Overlay />
                <StyledTop>
                    {title && <HeaderTitle title={title} />}
                    {vote && <HeaderVote vote={vote} />}
                </StyledTop>
                {tagline && <HeaderTagline tagline={tagline} />}
                {overview && <HeaderOverview overview={overview} />}
            </Header>
        </HeaderWrap>
    )
}

SingleMovieHeader.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    vote: PropTypes.number,
}

export default SingleMovieHeader

