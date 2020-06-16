import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/back-arrow.svg';

const StyledNotFound = styled.div`
min-height:70vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color: ${props => props.theme.colors.primary};
`
const StyledButton = styled.div`
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
  cursor:pointer;
  color:${props => props.theme.colors.tertiary};
  svg{
    filter:invert(0.7);
    transform: translateX(-5px);
  }
}
`

function MovieNotFound() {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <StyledNotFound>
            <p>Sorry, No movie could be found with this name.</p>
            <StyledButton onClick={refreshPage}><Arrow />Return to All Movies List</StyledButton>
        </StyledNotFound>
    )
}

export default MovieNotFound