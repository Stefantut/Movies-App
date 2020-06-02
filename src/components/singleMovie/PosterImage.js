import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const StyledPoster = styled.div`
background-image:url(${props => props.url});
height:280px;
width:185px;
background-position: center;
background-repeat: no-repeat; 
background-size: cover; 
`
function PosterImage({ url }) {
  return (
    <StyledPoster
      url={url}
      className="card__item card__item--poster"
    />
  );
}

PosterImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
export default PosterImage;
