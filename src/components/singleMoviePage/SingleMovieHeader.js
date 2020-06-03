import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
position: relative;
min-height: 720px;
height:100%;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-repeat: no-repeat;
box-shadow: 0px 0px 60px -20px rgba(0,0,0,0.75);
z-index:0;
`
const StyledOverlay = styled.div`
position: absolute;
width:100%;
height:100%;
left: 0;
top:0;
background-color: black;
opacity:0.7;
z-index:-1;
transition: 0.2s ease-in;
&:hover{
    opacity: 0.5;
}
`
const ContentWrap = styled.div`
padding:${props => props.theme.spacers.xtralarge};
`

const StyledTitle = styled.h1`
position: relative;
color: ${props => props.theme.colors.lightgrey};
user-select: none;
`
const StyledTagline = styled.p`color:red`
const StyledOverview = styled.p`
font-family: ${props => props.theme.font.regular};
color: ${props => props.theme.colors.light};
font-size: ${props => props.theme.fontSizes.medium};
user-select: none;
`
const Header = ({ imageUrl, title, tagline, overview }) => {
    return (
        <HeaderWrap imageUrl={imageUrl}>
            <StyledOverlay />
            <ContentWrap>
                <StyledTitle className='header__item header__item--title'>{title}</StyledTitle>
                <StyledTagline>{tagline}</StyledTagline>
                <StyledOverview>{overview}</StyledOverview>
            </ContentWrap>
        </HeaderWrap>
    )
}
export default Header