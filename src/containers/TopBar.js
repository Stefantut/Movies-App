import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../images/logo.png";
import Search from "../containers/Search";

const StyledWrap = styled.section`
  background-color: ${(props) => props.theme.colors.dark};
  filter: brightness(1.2);
`;
const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.content.medium};
  margin: 0 auto;
  color: ${(props) => props.theme.colors.light};
  padding: ${(props) => props.theme.spacers.medium} 0;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  a {
    text-decoration: none;
  }
  @media ${({ theme }) => theme.mediaQueries.below1300} {
    padding: ${(props) => props.theme.spacers.medium};
  }
`;

const LogoTitleWrap = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  img {
    max-width: 30px;
    width: 100%;
    height: 100%;
    margin-right: ${(props) => props.theme.spacers.small};
    transition: 0.3s ease-in-out;
    transform: rotate(10deg);
  }
  &:hover {
    cursor: pointer;
    img {
      transform: rotate(220deg) scale(1.2);
    }
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  user-select: none;
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  @media ${({ theme }) => theme.mediaQueries.below1300} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  @media ${({ theme }) => theme.mediaQueries.below600} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

function TopBar({ fetchMovies, searchState, path }) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    // if user is on homepage , on click it will refresh otherwise will redirect to homepage
    <StyledWrap>
      <TopBarContent>
        {path === "/" ? (
          <LogoTitleWrap onClick={refreshPage}>
            <img src={logo} alt="logo" />
            <StyledTitle className="header__item header__item--title">
              Movies App
            </StyledTitle>
          </LogoTitleWrap>
        ) : (
          <Link to="/">
            <LogoTitleWrap>
              <img src={logo} alt="logo" />
              <StyledTitle className="header__item header__item--title">
                Movies App
              </StyledTitle>
            </LogoTitleWrap>
          </Link>
        )}

        {path && <Search fetchMovies={fetchMovies} searchState={searchState} />}
      </TopBarContent>
    </StyledWrap>
  );
}
export default TopBar;
