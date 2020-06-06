import React from 'react'
import styled from 'styled-components'
import HeaderMovie from './HeaderMovie'

import { IMAGE_URL } from "../../Variables";
import fallbackHeader from '../../images/fallback-header.jpg';

const StyledHeader = styled.header`
  height:100%;
  width:100%;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  box-shadow: 0px 6px 28px 3px rgba(0,0,0,0.7);

`

const AppHeader = ({ movies }) => {
    return (
        <StyledHeader className="App-header">
            {/* Fix for rendering first and passes all data about first movie */}
            {
                movies[0] &&
                <HeaderMovie movie={movies[0]} url={(movies[0].backdrop_path === null) ? fallbackHeader : `${IMAGE_URL}w1280${movies[0].backdrop_path}`} />
            }
        </StyledHeader>
    )
}

export default AppHeader