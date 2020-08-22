import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Overlay from "../misc/Overlay";

const HeaderWrap = styled.header`
  background-color: ${(props) => props.theme.colors.dark};
  height: 100%;
  width: 100%;
  border-bottom: 5px solid ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 6px 28px 3px rgba(0, 0, 0, 0.7);
`;

const Header = styled.div`
  position: relative;
  min-height: 550px;
  max-width: ${(props) => props.theme.content.medium};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
`;

const StyledVote = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: ${(props) => props.theme.font.bold};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.light};
  margin-left: ${(props) => props.theme.spacers.small};
  user-select: none;
  .vote-result {
    color: ${(props) => props.theme.colors.primary};
    margin: 0 ${(props) => props.theme.spacers.xsmall};
  }
  .total {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.colors.lightgrey};
    margin-left: ${(props) => props.theme.spacers.xsmall};
  }
  @media ${({ theme }) => theme.mediaQueries.below1024} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => props.theme.spacers.medium};
  @media ${({ theme }) => theme.mediaQueries.below1024} {
    padding: ${(props) => props.theme.spacers.small};
  }
  @media ${({ theme }) => theme.mediaQueries.below768} {
    flex-wrap: wrap;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xtralarge};
  color: ${(props) => props.theme.colors.lightgrey};
  user-select: none;
  text-shadow: 3px 3px 3px ${(props) => props.theme.colors.secondary};
  @media ${({ theme }) => theme.mediaQueries.below1024} {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
  }
`;

const StyledTagline = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  margin: 0 ${(props) => props.theme.spacers.xtralarge};
  user-select: none;
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.secondary};

  @media ${({ theme }) => theme.mediaQueries.below1024} {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 0 ${(props) => props.theme.spacers.xlarge};
  }
`;

const StyledOverview = styled.p`
  font-family: ${(props) => props.theme.font.light};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.light};
  margin: 0 ${(props) => props.theme.spacers.xtralarge};
  padding-top: ${(props) => props.theme.spacers.xtralarge};
  text-align: center;
  user-select: none;
  text-shadow: 3px 3px 3px ${(props) => props.theme.colors.secondary};
  @media ${({ theme }) => theme.mediaQueries.below1024} {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 0 ${(props) => props.theme.spacers.xlarge};
    padding-top: ${(props) => props.theme.spacers.xlarge};
  }
  @media ${({ theme }) => theme.mediaQueries.below600} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const SingleMovieHeader = ({ imageUrl, title, tagline, overview, vote }) => {
  return (
    <HeaderWrap>
      <Header imageUrl={imageUrl}>
        <Overlay />
        <StyledTop>
          {title && (
            <StyledTitle className="header__item header__item--title">
              {title}
            </StyledTitle>
          )}
          {vote && (
            <StyledVote className="header__item header__item--vote">
              Vote: <span className="vote-result">{vote}</span>/
              <span className="total">10</span>
            </StyledVote>
          )}
        </StyledTop>
        {tagline && (
          <StyledTagline className="header__item header__item--tagline">
            {tagline}
          </StyledTagline>
        )}
        {overview && (
          <StyledOverview className="header__item header__item--overview">
            {overview}
          </StyledOverview>
        )}
      </Header>
    </HeaderWrap>
  );
};

SingleMovieHeader.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  vote: PropTypes.number,
};

export default SingleMovieHeader;
