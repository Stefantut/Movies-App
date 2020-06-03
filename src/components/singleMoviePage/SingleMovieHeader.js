import React from 'react';
import styled from 'styled-components';

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
};
`

const StyledTitle = styled.h1`
font-size: ${ props => props.theme.fontSizes.xtralarge};
color: ${ props => props.theme.colors.lightgrey};
user-select: none;
text-shadow: 0px 0px 10px ${ props => props.theme.colors.darkgrey};
margin: 0 ${ props => props.theme.spacers.xtralarge};
padding-bottom: ${ props => props.theme.spacers.small};
`
const StyledTagline = styled.p`
color: ${ props => props.theme.colors.primary};
font-size: ${ props => props.theme.fontSizes.xlarge};
margin: 0 ${ props => props.theme.spacers.xtralarge};
padding-bottom: ${ props => props.theme.spacers.xtralarge};
user-select: none;
`

const StyledOverview = styled.p`
font-family: ${ props => props.theme.font.light};
font-size: ${ props => props.theme.fontSizes.medium};
color: ${ props => props.theme.colors.light};
margin: 0 ${ props => props.theme.spacers.xtralarge};
text-align: center;
user-select: none;
`
const Header = ({ imageUrl, title, tagline, overview, vote }) => {
    return (
        <HeaderWrap imageUrl={imageUrl}>
            <StyledOverlay />
            {title && <StyledTitle className='header__item header__item--title'>{title}</StyledTitle>}
            {tagline && <StyledTagline className='header__item header__item--tagline'>{tagline}</StyledTagline>}
            {overview && <StyledOverview className='header__item header__item--overview'>{overview}</StyledOverview>}
            {vote}
        </HeaderWrap>
    )
}
export default Header