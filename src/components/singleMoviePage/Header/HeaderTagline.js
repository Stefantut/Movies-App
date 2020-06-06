import React from 'react';
import styled from 'styled-components'

const StyledTagline = styled.p`
color: ${ props => props.theme.colors.primary};
font-size: ${ props => props.theme.fontSizes.xxlarge};
margin: 0 ${ props => props.theme.spacers.xtralarge};
user-select: none;
text-shadow: 2px 2px 2px ${ props => props.theme.colors.secondary};
`
const HeaderTagline = ({ tagline }) => {
    return (
        <StyledTagline className='header__item header__item--tagline'>{tagline}</StyledTagline>
    )
}

export default HeaderTagline