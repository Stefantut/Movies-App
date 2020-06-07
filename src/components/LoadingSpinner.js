
import React from 'react';
import styled from 'styled-components';


const ComponentWrap = styled.section`
height:65vh;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`
const StyledSpinner = styled.svg`
  animation: rotate 1.5s linear infinite;
  display: flex;
  margin: 0 auto;
  width: 60px;
  height: 60px;
  
  & .path {
    stroke:${props => props.theme.colors.primary};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const StyledLoading = styled.h4`
text-align: center;
margin: 1em 0;
color: ${props => props.theme.colors.lightgrey};
letter-spacing:0.3em;
`

const LoadingSpinner = () => (
  <ComponentWrap>
    <StyledLoading>Loading... please wait</StyledLoading>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </ComponentWrap>
);

export default LoadingSpinner;