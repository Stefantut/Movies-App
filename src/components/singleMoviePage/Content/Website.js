import React from 'react';
import styled from 'styled-components';


const WebsiteWrap = styled.div`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
display:flex;
a{
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};
    text-decoration: none;
    transition: 0.2s ease-in;
    &:hover{
    color: ${props => props.theme.colors.tertiary};
    }
}
`
const StyledTitle = styled.p`
color: ${props => props.theme.colors.primary};

`
const Website = ({ websiteLink, title }) => {
    return (
        <WebsiteWrap>
            <StyledTitle>Website: </StyledTitle>
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">{title}</a>
        </WebsiteWrap>
    )
}

export default Website