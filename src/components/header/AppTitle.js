import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h3`
color: ${props => props.theme.colors.primary};
padding: ${props => props.theme.spacers.medium} 0;
user-select: none;
`

const AppTitle = () => {
    return (
        <StyledTitle className='header__item header__item--title'>Movies App</StyledTitle>
    )
}
export default AppTitle