import React from "react";
import styled from 'styled-components';
import { convertToClassName } from '../../helpers'
const StyledFilter = styled.ul`
  max-width: 1280px;
  margin: ${props => props.theme.spacers.xxlarge} auto;

`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  text-align: center;

`
const ListElement = styled.li`
  color:${props => props.theme.colors.primary};
  list-style-type:none;
  &:hover{
    color:${props => props.theme.colors.tertiary};
    cursor:pointer;
  }
`
function FilterGenres({ genres, handleGenre }) {
    const genresList = [];
    const allGenres = genres && genres.map(genre =>
        (<ListElement className={`genre genre--${convertToClassName(genre.name)}`} key={genre.id} onClick={() => { handleGenre(genre.id, genre.name); }}>{genre.name}</ListElement>)
    )
    genresList.push(allGenres)
    return (
        <StyledFilter className="genres-list">
            <h3>Filter by Genres:</h3>
            <List>
                {genresList}
            </List>

        </StyledFilter>
    )
}

export default FilterGenres