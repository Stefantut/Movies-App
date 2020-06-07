import React from 'react';
import styled from 'styled-components'


const StyledOverlay = styled.div`
position: absolute;
width:100%;
height:100%;
left: 0;
top:0;
background-image: linear-gradient(to bottom,rgba(0,0,0,1) 0,rgba(0,0,0,0) 55%,rgba(0,0,0,1) 100%);
z-index:-1;
transition: 0.2s ease-in;
`

const Overlay = () => {
    return (
        <StyledOverlay />
    )
}

export default Overlay