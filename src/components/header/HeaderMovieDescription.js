import React from 'react'
import styled from 'styled-components';

const StyledDescription = styled.p`
font-family: ${ props => props.theme.font.light};
font-size: ${ props => props.theme.fontSizes.large};
color: ${ props => props.theme.colors.light};
padding: ${ props => props.theme.spacers.large};
text-align: center;
user-select: none;
text-shadow: 3px 3px 3px ${ props => props.theme.colors.secondary};
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.medium};
}`
const HeaderMovieDescription = ({ description }) => {
    return (
        <StyledDescription className='header__content header__content--description'>{description}</StyledDescription>
    )
}

export default HeaderMovieDescription
