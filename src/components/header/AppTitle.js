import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
color: ${props => props.theme.colors.primary};
user-select: none;
display: flex;
justify-content: center;
font-size: ${props => props.theme.fontSizes.xlarge};
@media ${({ theme }) => theme.mediaQueries.below1300}{
    font-size: ${ props => props.theme.fontSizes.large};
}
`

const AppTitle = () => {
    return (
        <StyledTitle className='header__item header__item--title'>Movies App</StyledTitle>
    )
}
export default AppTitle