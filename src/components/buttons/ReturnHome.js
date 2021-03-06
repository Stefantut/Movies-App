import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/back-arrow.svg';

const StyledLink = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
max-width: ${props => props.theme.content.medium};
margin: 0 auto;
padding:  ${props => props.theme.spacers.large} 0;
font-size: ${props => props.theme.fontSizes.medium};
@media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: ${props => props.theme.spacers.large};
}
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.small};
}
a{
    color:${props => props.theme.colors.lightgrey};
    display: flex;
    align-items:center;
    text-decoration:none;
    svg{
        width: 15px;
        height:15px;
        filter:invert(1);
        transition: 0.2s ease-in;
        margin-right: ${props => props.theme.spacers.xsmall};
    }
&:hover{
  color:${props => props.theme.colors.tertiary};
  svg{
    filter:invert(0.7);
    transform: translateX(-5px);
  }
}
}
`
const ReturnHome = () => {
    return (
        <StyledLink>
            <Link to='/'><Arrow />Return to main page</Link>
        </StyledLink>
    )
}
export default ReturnHome