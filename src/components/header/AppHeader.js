import React from 'react'
import styled from 'styled-components'
import AppTitle from './AppTitle'
import HeaderMovie from './HeaderMovie'

import { IMAGE_URL } from "../../Variables";

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function AppHeader({ movies }) {
    return (
        <StyledHeader className="App-header">
            <AppTitle />
            {/* Fix for rendering first and passes al data about first movie */}
            {
                movies[0] &&
                <HeaderMovie movie={movies[0]} url={`${IMAGE_URL}w1280${movies[0].backdrop_path}`} />
            }
        </StyledHeader>
    )
}

export default AppHeader