import React from 'react';
import styled from 'styled-components'


const StyledOverlay = styled.div`
position: absolute;
width:100%;
height:100%;
left: 0;
top:0;
background-color: black;
opacity:0.5;
z-index:-1;
transition: 0.2s ease-in;
`

const Overlay = () => {
    return (
        <StyledOverlay />
    )
}

export default Overlay