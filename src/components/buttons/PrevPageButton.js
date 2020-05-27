import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:${(props => props.theme.colors.primary)};
color: ${(props => props.theme.colors.tertiary)};
outline: thin;
border: none;
padding: ${(props => props.theme.spacers.small)} ${(props => props.theme.spacers.large)};
&:hover{
    cursor:pointer;
}
`;

const PrevPageButton = ({ prev }) => {
    return (
        <StyledButton onClick={prev}>Prev Page</StyledButton>
    )
}

export default PrevPageButton