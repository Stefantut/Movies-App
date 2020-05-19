import React from "react";
import { europeanDateFormat } from "../helpers";

function ReleaseDate(props) {
  return (
    // Tried to format the data with React.INTL but is a string instead of Date Object
    <p className="card__item card__item--release">
      Release Date: {europeanDateFormat(props.release)}
    </p>
  );
}

export default ReleaseDate;
