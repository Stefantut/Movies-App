import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const StyledTitle = styled.p`
text-align: center;
user-select: none;
padding: ${props => props.theme.spacers.xsmall} 0;
color: ${props => props.theme.colors.primary};
font-family: "RobotoMedium";
`
function MovieTitle({ title }) {
  return <StyledTitle className="card__item card__item--title">{title}</StyledTitle>;
}

MovieTitle.propTypes = {
  title: PropTypes.string,
};
export default MovieTitle;
