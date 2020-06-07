import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";

const StyledPoster = styled.div`
background-image:url(${props => props.url});
height: 280px;
width: 185px;
background-position: center;
background-repeat: no-repeat; 
background-size: cover; 
transition: 0.1s ease-in;
&:hover{
  filter: brightness(0.6);
}
`
const PosterImage = ({ url }) => {

  return (
    <React.Fragment>
      <StyledPoster
        url={url}
        className="card__item card__item--poster" data-for="linkTip" data-tip='linkTip'
      />
      {/* Forced reflow while executing JavaScript took ms in console log because of tooltip */}
      <ReactTooltip id="linkTip" place="top" effect='solid' arrowColor='#C20114' backgroundColor='#C20114'>
        More details
      </ReactTooltip>
    </React.Fragment>
  );
}

PosterImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
export default PosterImage;
