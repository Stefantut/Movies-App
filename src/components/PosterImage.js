import React from "react";

function PosterImage(props) {
  return (
    <img
      src={props.url}
      alt={props.title}
      className="card__item card__item--poster"
    />
  );
}
export default PosterImage;
