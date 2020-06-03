import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Overlay from '../misc/Overlay'
import HeaderTitle from './HeaderTitle'
import HeaderTagline from './HeaderTagline'
import HeaderOverview from './HeaderOverview'
import HeaderVote from './HeaderVote'

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

const Header = ({ imageUrl, title, tagline, overview, vote }) => {
    return (
        <HeaderWrap imageUrl={imageUrl}>
            <Overlay />
            {title && <HeaderTitle title={title} />}
            {tagline && <HeaderTagline tagline={tagline} />}
            {vote && <HeaderVote vote={vote} />}
            {overview && <HeaderOverview overview={overview} />}
        </HeaderWrap>
    )
}
export default Header

