import React from "react";
import PropTypes from "prop-types";

function PosterImage({ url, title }) {
  return (
    <img
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
