import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { europeanDateFormat } from "../../utils/helpers";

const StyledDate = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.lightgrey};
  user-select: none;
`;
const ReleaseDate = ({ release }) => {
  return (
    // Tried to format the data with React.INTL but is a string instead of Date Object
    <StyledDate className="card__item card__item--release">
      Release Date: {europeanDateFormat(release)}
    </StyledDate>
  );
};

ReleaseDate.propTypes = {
  release: PropTypes.string,
};
export default ReleaseDate;
