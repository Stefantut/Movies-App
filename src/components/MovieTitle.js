import React from "react";
import PropTypes from "prop-types";

function MovieTitle(props) {
  return <p className="card__item card__item--title">{props.title}</p>;
}

MovieTitle.propTypes = {
  title: PropTypes.string,
};
export default MovieTitle;
