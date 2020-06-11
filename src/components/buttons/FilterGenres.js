import React, { useState } from "react";
import styled from 'styled-components';
import { convertToClassName } from '../../helpers'
const StyledList = styled.ul`
  max-width: 1280px;
  margin: ${props => props.theme.spacers.xxlarge} auto;
  color:${props => props.theme.colors.primary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  text-align: center;
`

function FilterGenres({ genres, handleGenre }) {
    console.log(genres);
    const genresList = [];
    const allGenres = genres && genres.map((genre, index) => (<li className={`genre genre--${convertToClassName(genre.name)}`} key={genre.id} onClick={() => { handleGenre(genre.id); }}>{genre.name}</li>))
    genresList.push(allGenres)
    return (
        <StyledList className="genres-list">

            {genresList}

        </StyledList>
    )
}

export default FilterGenres