import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const StyledPoster = styled.img`
max-height:260px;
`
function PosterImage({ url, title }) {
  return (
    <StyledPoster
      src={url}
      alt={title}
      className="card__item card__item--poster"
    />
  );
}

PosterImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
export default PosterImage;
