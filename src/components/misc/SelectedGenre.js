import React from "react";
import styled from 'styled-components';

const StyledGenre = styled.h3`
  max-width: ${props => props.theme.content.medium};
  margin: ${props => props.theme.spacers.medium} auto;
  color:${props => props.theme.colors.lightgrey};
  user-select:none;
  font-family: ${props => props.theme.font.light};
  @media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: 0 ${props => props.theme.spacers.medium}
}
  @media ${({ theme }) => theme.mediaQueries.below600}{
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
}
`

const SelectedGenre = ({ genre }) => {
  return (
    <StyledGenre>Your selected filter: {genre}</StyledGenre>
  )
}
export default SelectedGenre