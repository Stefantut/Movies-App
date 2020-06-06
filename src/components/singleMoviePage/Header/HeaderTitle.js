import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
font-size: ${ props => props.theme.fontSizes.xtralarge};
color: ${ props => props.theme.colors.lightgrey};
user-select: none;
text-shadow: 3px 3px 3px ${ props => props.theme.colors.secondary};
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.xlarge};
}
`

const HeaderTitle = ({ title }) => {
    return (
        <StyledTitle className='header__item header__item--title'>{title}</StyledTitle>
    )
}

export default HeaderTitle