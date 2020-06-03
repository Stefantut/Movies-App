import React from 'react';
import styled from 'styled-components'

const StyledTagline = styled.p`
color: ${ props => props.theme.colors.primary};
font-size: ${ props => props.theme.fontSizes.xlarge};
margin: 0 ${ props => props.theme.spacers.xtralarge};
user-select: none;
`
const HeaderTagline = ({ tagline }) => {
    return (
        <StyledTagline className='header__item header__item--tagline'>{tagline}</StyledTagline>
    )
}

export default HeaderTagline