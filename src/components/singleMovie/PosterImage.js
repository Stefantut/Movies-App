import React from "react";
import PropTypes from "prop-types";

function PosterImage(props) {
  return (
    <img
      src={props.url}
      alt={props.title}
      className="card__item card__item--poster"
    />
  );
}

PosterImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
export default PosterImage;
