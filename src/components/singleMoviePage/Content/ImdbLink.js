import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLink } from '../../../images/arrow-link.svg';

const ImdbWrap = styled.div`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
display:flex;
a{
    display:flex;
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};
    text-decoration: none;
    transition: 0.2s ease-in;
    svg{
        width: 15px;
        height:15px;
        filter:invert(1);
        transition: 0.2s ease-in;
        transform: rotate(-45deg);
        margin-right: ${props => props.theme.spacers.xsmall};
    }
    &:hover{
    color: ${props => props.theme.colors.tertiary};
    svg {
        filter:invert(0.7);
        transform: rotate(-30deg);
    }
    }
}
`
const StyledTitle = styled.p`
color: ${props => props.theme.colors.primary};

`
const ImdbLink = ({ imdbId }) => {
    return (
        <ImdbWrap>
            <StyledTitle>More details on: </StyledTitle>

            <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank" rel="noopener noreferrer"><ArrowLink />IMDB</a>
        </ImdbWrap>
    )
}

export default ImdbLink