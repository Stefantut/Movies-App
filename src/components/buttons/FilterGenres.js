import React, { useState } from "react";
import styled from 'styled-components';

import { CSSTransition } from 'react-transition-group'
import '../../css/animations.css'
import { convertToClassName } from '../../helpers'


const StyledFilter = styled.div`
  max-width: ${props => props.theme.content.medium};
  margin: ${props => props.theme.spacers.xxlarge} auto;
  @media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: 0 ${props => props.theme.spacers.medium}
}
  `

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items:center;
  margin-top: ${props => props.theme.spacers.medium};
`
const ListElement = styled.li`
  color:${props => props.theme.colors.primary};
  list-style-type:none;
  margin-bottom: ${props => props.theme.spacers.xsmall};
  &:hover{
    color:${props => props.theme.colors.tertiary};
    cursor:pointer;
  }
  &.active{
    color:${props => props.theme.colors.lightgrey};
    background-color:${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.primary};
    padding:0 ${props => props.theme.spacers.small};
  }
`
const StyledButton = styled.button`
    display: inline-flex;
    border:none;
    font-size: ${props => props.theme.fontSizes.small};
    padding: ${props => props.theme.spacers.xsmall} ${props => props.theme.spacers.medium};
    font-family: ${props => props.theme.font.light};
    color: ${props => props.theme.colors.lightgrey};
    background-color: ${props => props.theme.colors.primary};
    align-items:center;
    transition:0.2s ease;
    margin-right: ${props => props.theme.spacers.medium};
    &:hover{
        cursor:pointer;
        color: ${props => props.theme.colors.tertiary};
    }
    &:focus{
        outline:thin;
    }
   span{
      display:none;
      transition:0.2 ease-in;
      margin-left:20px;
      ${({ visible }) => visible && `
      display:block;
      `}
      &:hover{
         color: ${props => props.theme.colors.secondary};

     }
  }
  @media ${({ theme }) => theme.mediaQueries.below600}{
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
}
`


function FilterGenres({ genres, handleGenre, selectedGenre, clearGenreFilter, usedGenresFilter }) {
  const [visible, setVisible] = useState(false);
  const genresList = [];

  const allGenres = genres && genres.map(genre =>
    (<ListElement className={`genre genre--${convertToClassName(genre.name)} ${genre.id === selectedGenre ? "active" : ""}`} key={genre.id} onClick={() => { handleClick(); handleGenre(genre) }}>{genre.name}</ListElement>)
  )
  genresList.push(allGenres)

  function handleClick() {
    setVisible(!visible);
  }
  return (
    //pass visible state to styled components
    <StyledFilter >
      <StyledButton onClick={handleClick} visible={visible}>Filter by Genres<span>x</span></StyledButton>
      {usedGenresFilter && <StyledButton onClick={clearGenreFilter} >Clear Filter</StyledButton>}

      <CSSTransition
        in={visible}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <List className="genres-list">
          {genresList}
        </List>
      </CSSTransition>


    </StyledFilter>
  )
}

export default FilterGenres