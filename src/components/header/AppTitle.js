import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
color: red;
`

const AppTitle = () => {
    return (
        <StyledTitle className='header__item header__item--title'>Movies App</StyledTitle>
    )
}
export default AppTitle