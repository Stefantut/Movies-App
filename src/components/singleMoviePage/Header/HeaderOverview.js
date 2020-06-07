import React from 'react';
import styled from 'styled-components'

const StyledOverview = styled.p`
font-family: ${ props => props.theme.font.light};
font-size: ${ props => props.theme.fontSizes.large};
color: ${ props => props.theme.colors.light};
margin: 0 ${ props => props.theme.spacers.xtralarge};
padding-top: ${ props => props.theme.spacers.xtralarge};
text-align: center;
user-select: none;
text-shadow: 3px 3px 3px ${ props => props.theme.colors.secondary};
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.medium};
    margin: 0 ${ props => props.theme.spacers.xlarge};
    padding-top: ${ props => props.theme.spacers.xlarge};
}
@media ${({ theme }) => theme.mediaQueries.below600}{
    font-size: ${ props => props.theme.fontSizes.small};
}
`

const MovieTitle = ({ overview }) => {
    return (
        <StyledOverview className='header__item header__item--overview'>{overview}</StyledOverview>
    )
}

export default MovieTitle