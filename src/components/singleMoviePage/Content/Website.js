import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLink } from '../../../images/arrow-link.svg';

const WebsiteWrap = styled.div`
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
@media ${({ theme }) => theme.mediaQueries.below600}{
    font-size: ${ props => props.theme.fontSizes.xsmall};
}
`
const StyledTitle = styled.p`
color: ${props => props.theme.colors.primary};

`
const Website = ({ websiteLink, title }) => {
    return (
        <WebsiteWrap>
            <StyledTitle>Website: </StyledTitle>

            <a href={websiteLink} target="_blank" rel="noopener noreferrer"><ArrowLink />{title}</a>
        </WebsiteWrap>
    )
}

export default Website