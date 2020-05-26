import React from 'react'
import styled from 'styled-components'
import AppTitle from './AppTitle'
import HeaderMovie from './HeaderMovie'

import { IMAGE_URL } from "../../Variables";

function AppHeader(props) {
    return (
        <header className="App-header">
            <AppTitle />
            {/* Fix for rendering first and passes al data about first movie */}
            {
                props.movies[0] &&
                <HeaderMovie movie={props.movies[0]} url={`${IMAGE_URL}w1280${props.movies[0].backdrop_path}`} />
            }
        </header>
    )
}

export default AppHeader