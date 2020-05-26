import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:${(props => props.theme.colors.primary)};
color:${(props => props.primary ? props.theme.colors.tertiary : 'blue')};
outline:thin;
border:none;
padding:10px 20px;
&:hover{
    cursor:pointer;
}
`;

const NextPageButton = (props) => {
    return (
        <StyledButton primary onClick={props.next}>Next Page</StyledButton>
    )
}

export default NextPageButton