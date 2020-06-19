import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledPoster = styled.div`
background-image:url(${props => props.url});
height: 280px;
width: 185px;
background-position: center;
background-repeat: no-repeat; 
background-size: cover; 
transition: 0.2s ease-in;
position: relative;
&:hover{
  mix-blend-mode: difference;
}
`

const StyledGenreList = styled.ul`
position: absolute;
top:${props => props.theme.spacers.xsmall};
right:${props => props.theme.spacers.xsmall};
display: flex;
flex-direction: column;
align-items: flex-end;
list-style-type:none;
`
const StyledListItem = styled.li`
  color:${props => props.theme.colors.light};
  font-size:${props => props.theme.fontSizes.xsmall};
  background-color: rgba(12, 18, 12, 0.5);
  margin:${props => props.theme.spacers.xsmall};
  padding: 0 ${props => props.theme.spacers.xsmall};
  border: 1px solid ${props => props.theme.colors.light};
`

const PosterImage = ({ url, genresIds, genresList }) => {

  // map through genres id array and return the name for each
  const allGenres = genresIds && genresIds.map((id) => {
    // map through Genres List - if is equal to the id will return the name
    const filteredGenre = genresList && genresList.map((genre) =>
      (genre.id === id) ? genre.name : ''
    )
    return <StyledListItem key={id} className={`genres__item genres__item--${id}`}>{filteredGenre}</StyledListItem>

  }
  );
  return (
    <StyledPoster
      url={url}
      className="card__item card__item--poster" data-for="linkTip" data-tip='linkTip'>
      <StyledGenreList>
        {allGenres}
      </StyledGenreList>
    </StyledPoster>
  );
}

PosterImage.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
export default PosterImage;
