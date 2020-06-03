import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Overlay from '../misc/Overlay'
import HeaderTitle from './Header/HeaderTitle'
import HeaderTagline from './Header/HeaderTagline'
import HeaderOverview from './Header/HeaderOverview'
import HeaderVote from './Header/HeaderVote'

const HeaderWrap = styled.header`
position: relative;
min-height: 600px;
height:100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-repeat: no-repeat;
box-shadow: 0px 0px 60px -20px rgba(0,0,0,0.75);
z-index:0;
margin-bottom: ${props => props.theme.spacers.xxlarge}
`

const StyledTop = styled.div`
display:flex;
justify-content:space-between;
width:100%;
padding: 0 ${ props => props.theme.spacers.xtralarge};
`

const Header = ({ imageUrl, title, tagline, overview, vote }) => {
    return (
        <HeaderWrap imageUrl={imageUrl}>
            <Overlay />
            <StyledTop>
                {title && <HeaderTitle title={title} />}
                {vote && <HeaderVote vote={vote} />}
            </StyledTop>
            {tagline && <HeaderTagline tagline={tagline} />}
            {overview && <HeaderOverview overview={overview} />}
        </HeaderWrap>
    )
}

Header.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    vote: PropTypes.number,
}

export default Header

