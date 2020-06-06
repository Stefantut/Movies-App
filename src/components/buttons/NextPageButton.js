import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:${(props => props.theme.colors.primary)};
color:${(props => props.primary ? props.theme.colors.tertiary : 'blue')};
outline: thin;
border: none;
padding: ${(props => props.theme.spacers.small)} ${(props => props.theme.spacers.large)};
transition: 0.1s ease-in;
&:hover{
    cursor:pointer;
    color: ${props => props.theme.colors.lightgrey};
    box-shadow: 0 0 0 1px  ${props => props.theme.colors.lightgrey} inset;
}
`;

const NextPageButton = ({ next }) => {
    return (
        <StyledButton primary onClick={next}>Next Page</StyledButton>
    )
}

export default NextPageButton
