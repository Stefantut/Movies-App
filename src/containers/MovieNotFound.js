import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../images/back-arrow.svg";

const StyledNotFound = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledMessage = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacers.xxlarge};
  user-select: none;
  @media ${({ theme }) => theme.mediaQueries.below600} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const StyledButton = styled.div`
  color: ${(props) => props.theme.colors.lightgrey};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  svg {
    width: 15px;
    height: 15px;
    filter: invert(1);
    transition: 0.2s ease-in;
    margin-right: ${(props) => props.theme.spacers.xsmall};
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.tertiary};
    svg {
      filter: invert(0.7);
      transform: translateX(-5px);
    }
  }

  @media ${({ theme }) => theme.mediaQueries.below600} {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

function MovieNotFound() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <StyledNotFound>
      <StyledMessage>Sorry, We couldn't find any movie.</StyledMessage>
      <StyledButton onClick={refreshPage}>
        <Arrow />
        Return to All Movies List
      </StyledButton>
    </StyledNotFound>
  );
}

export default MovieNotFound;
