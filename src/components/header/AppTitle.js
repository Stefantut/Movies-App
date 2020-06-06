import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
color: ${props => props.theme.colors.primary};
background-color: ${props => props.theme.colors.dark};
padding: ${props => props.theme.spacers.medium} 0;
user-select: none;
display: flex;
justify-content: center;
font-size: ${props => props.theme.fontSizes.large}
`

const AppTitle = () => {
    return (
        <StyledTitle className='header__item header__item--title'>Movies App</StyledTitle>
    )
}
export default AppTitle