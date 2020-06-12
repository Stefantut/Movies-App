import React from "react";
import styled from 'styled-components';
const StyledGenre = styled.h3`
  color:${props => props.theme.colors.lightgrey};
`

const SelectedGenre = ({ genre }) => {
    return (
        <StyledGenre>Your Filter: {genre}</StyledGenre>
    )
}
export default SelectedGenre