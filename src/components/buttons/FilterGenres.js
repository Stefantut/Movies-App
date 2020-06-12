import React, { useState } from "react";
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import '../../css/animations.css'
import { convertToClassName } from '../../helpers'


const StyledFilter = styled.div`
  max-width: 1280px;
  margin: ${props => props.theme.spacers.xxlarge} auto;
  span{
      display:none;
      transition:0.2 ease-in;
      margin-left:20px;
      ${({ visible }) => visible && `
      display:block;
      `}

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
`
const StyledButton = styled.h3`
    display: inline-flex;
    font-size: ${props => props.theme.fontSizes.small};
    padding: ${props => props.theme.spacers.xsmall} ${props => props.theme.spacers.medium};
    font-family: ${props => props.theme.font.light};
    color: ${props => props.theme.colors.lightgrey};
    background-color: ${props => props.theme.colors.primary};
    align-items:center;
    transition:0.2s ease;
    &:hover{
        cursor:pointer;
        color: ${props => props.theme.colors.tertiary};
    }
`


function FilterGenres({ genres, handleGenre }) {
    const [visible, setVisible] = useState(false);
    const genresList = [];
    const allGenres = genres && genres.map(genre =>
        (<ListElement className={`genre genre--${convertToClassName(genre.name)}`} key={genre.id} onClick={() => { handleGenre(genre.id, genre.name) }}>{genre.name}</ListElement>)
    )
    genresList.push(allGenres)

    function handleClick() {
        setVisible(!visible);
    }

    return (
        //pass visible state to styled components
        <StyledFilter visible={visible}>
            <StyledButton onClick={handleClick}>Filter by Genres<span>x</span></StyledButton>

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