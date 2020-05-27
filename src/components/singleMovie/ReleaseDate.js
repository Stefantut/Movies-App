import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'
import { europeanDateFormat } from "../../helpers";

const StyledDate = styled.p`
text-align:center;
color:green;
user-select:none;
`
function ReleaseDate({ release }) {
  return (
    // Tried to format the data with React.INTL but is a string instead of Date Object
    <StyledDate className="card__item card__item--release">
      Release Date: {europeanDateFormat(release)}
    </StyledDate>
  );
}

ReleaseDate.propTypes = {
  release: PropTypes.string,
};
export default ReleaseDate;
