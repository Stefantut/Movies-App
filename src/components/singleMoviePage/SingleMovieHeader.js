import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
min-height: 720px;
height:100%;
background-image: url(${props => props.imageUrl});
background-size: cover;
background-repeat: no-repeat;
`

const StyledTitle = styled.h1`
color:red;
`

const Header = ({ title, imageUrl }) => {
    return (
        <HeaderWrap imageUrl={imageUrl}>
            <StyledTitle className='header__item header__item--title'>{title}</StyledTitle>
        </HeaderWrap>
    )
}
export default Header