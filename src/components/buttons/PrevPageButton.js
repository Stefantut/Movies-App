import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:${(props => props.theme.colors.primary)};
color:${(props => props.theme.colors.tertiary)};
outline:thin;
border:none;
padding:10px 20px;
&:hover{
    cursor:pointer;
}
`;

const PrevPageButton = (props) => {
    return (
        <StyledButton onClick={props.prev}>Prev Page</StyledButton>
    )
}

export default PrevPageButton