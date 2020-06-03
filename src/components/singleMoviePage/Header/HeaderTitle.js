import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
font-size: ${ props => props.theme.fontSizes.xtralarge};
color: ${ props => props.theme.colors.lightgrey};
user-select: none;
text-shadow: 0px 0px 10px ${ props => props.theme.colors.darkgrey};
`

const HeaderTitle = ({ title }) => {
    return (
        <StyledTitle className='header__item header__item--title'>{title}</StyledTitle>
    )
}

export default HeaderTitle