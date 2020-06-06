import React from 'react'
import styled from 'styled-components'
import HeaderMovie from './HeaderMovie'

import { IMAGE_URL } from "../../Variables";
import fallbackHeader from '../../images/fallback-header.jpg';

const StyledHeader = styled.header`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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