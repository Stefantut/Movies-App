import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Overlay from "../components/misc/Overlay";

const HeaderMovieWrap = styled.div`
  min-height: 550px;
  max-width: ${(props) => props.theme.content.medium};
  background-image: url(${(props) => props.defaultUrl});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.font.medium};
  font-size: ${(props) => props.theme.fontSizes.xtralarge};
  color: ${(props) => props.theme.colors.lightgrey};
  user-select: none;
  text-shadow: 3px 3px 3px ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacers.large};
  @media ${({ theme }) => theme.mediaQueries.below1024} {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    padding: ${(props) => props.theme.spacers.medium};
  }
`;

const StyledDescription = styled.p`
  font-family: ${(props) => props.theme.font.light};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.light};
  padding: ${(props) => props.theme.spacers.large};
  text-align: center;
  user-select: none;
  text-shadow: 3px 3px 3px ${(props) => props.theme.colors.secondary};
  @media ${({ theme }) => theme.mediaQueries.below1024} {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const HeaderMovie = ({ url, movie }) => {
  return (
    // pass url again to styled component as prop
    <HeaderMovieWrap
      className="header__item header__item--content"
      defaultUrl={url}
    >
      <Overlay />
      <StyledTitle className="header__content header__content--title">
        {movie.title}
      </StyledTitle>
      <StyledDescription className="header__content header__content--description">
        {movie.overview}
      </StyledDescription>
    </HeaderMovieWrap>
  );
};

HeaderMovie.propTypes = {
  url: PropTypes.string, // url isn't included
  title: PropTypes.string,
  description: PropTypes.string,
};
export default HeaderMovie;
