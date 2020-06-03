import React from 'react';
import styled from 'styled-components'

const StyledOverview = styled.p`
font-family: ${ props => props.theme.font.light};
font-size: ${ props => props.theme.fontSizes.medium};
color: ${ props => props.theme.colors.light};
margin: 0 ${ props => props.theme.spacers.xtralarge};
padding-top: ${ props => props.theme.spacers.xtralarge};
text-align: center;
user-select: none;
`

const MovieTitle = ({ overview }) => {
    return (
        <StyledOverview className='header__item header__item--overview'>{overview}</StyledOverview>
    )
}

export default MovieTitle