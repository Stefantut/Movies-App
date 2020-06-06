import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
font-family: ${props => props.theme.font.medium};
font-size: ${ props => props.theme.fontSizes.xtralarge};
color: ${ props => props.theme.colors.lightgrey};
user-select: none;
text-shadow: 3px 3px 3px ${ props => props.theme.colors.secondary};
padding: 0 ${ props => props.theme.spacers.xtralarge};
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.xlarge};
    padding: 0 ${ props => props.theme.spacers.xlarge};
}
`
const HeaderMovieTitle = ({ title }) => {
    return (
        <StyledTitle className='header__content header__content--title'>{title}</StyledTitle>
    )
}

export default HeaderMovieTitle
