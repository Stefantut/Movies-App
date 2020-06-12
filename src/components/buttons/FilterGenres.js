import React, { useState } from "react";
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import '../../css/animations.css'
import { convertToClassName } from '../../helpers'


const StyledFilter = styled.div`
  /* max-width: 1280px;
  margin: ${props => props.theme.spacers.xxlarge} auto; */
position:sticky;
top:20%;
left:0;
`

const List = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  display:flex;
  flex-direction:column;
  text-align: right;
  position: absolute;
  top:0;
  left:0;
  margin-left:${props => props.theme.spacers.xxxlarge};
`
const ListElement = styled.li`
  color:${props => props.theme.colors.primary};
  list-style-type:none;
  &:hover{
    color:${props => props.theme.colors.tertiary};
    cursor:pointer;
  }
`
const StyledButton = styled.h3`
writing-mode: tb;
    transform: rotate(180deg);
    display: inline-flex;
    font-size: ${props => props.theme.fontSizes.small};
    margin-left:${props => props.theme.spacers.xsmall};
    padding: ${props => props.theme.spacers.small} ${props => props.theme.spacers.xsmall};
    font-family: ${props => props.theme.font.light};
    color: ${props => props.theme.colors.lightgrey};
    background-color: ${props => props.theme.colors.primary};
display:flex;
align-items:center;
    &:hover{
        cursor:grab;
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
        <StyledFilter>
            <StyledButton onClick={handleClick}>Filter by Genres</StyledButton>

            <CSSTransition
                in={visible}
                timeout={250}
                classNames="appear"
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