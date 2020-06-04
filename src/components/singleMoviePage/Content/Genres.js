import React from 'react';
import styled from 'styled-components';

const GenresWrap = styled.div`
margin-bottom: ${props => props.theme.spacers.xsmall};
font-family: ${props => props.theme.font.medium};
display: flex;

`
const StyledTitle = styled.p`
   color: ${props => props.theme.colors.primary};
   user-select: none;
`
const GenresList = styled.ul`
user-select:none;
display: flex;
margin-left: ${props => props.theme.spacers.small};
list-style-type: none;
li{
   color: ${props => props.theme.colors.light};
   margin-right: ${props => props.theme.spacers.xsmall};
   &:after{
       content:'|';
       margin-left: ${props => props.theme.spacers.small};
   }
   &:last-child{
      &:after{
          content: unset;
      }
   }
}
`

const Genres = ({ genres }) => {
    return (
        <GenresWrap>
            <StyledTitle>Genres:</StyledTitle>
            <GenresList>{genres}</GenresList>
        </GenresWrap>
    )
}

export default Genres