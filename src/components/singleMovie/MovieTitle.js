import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const StyledTitle = styled.p`
text-align: center;
user-select: none;
`
function MovieTitle({ title }) {
  return <StyledTitle className="card__item card__item--title">{title}</StyledTitle>;
}

MovieTitle.propTypes = {
  title: PropTypes.string,
};
export default MovieTitle;
