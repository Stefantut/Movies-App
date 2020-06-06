import React from 'react';
import styled from 'styled-components';
import { convertToClassName } from '../../../helpers'


const LanguagesWrap = styled.div`
margin-bottom: ${props => props.theme.spacers.xsmall};
font-family: ${props => props.theme.font.medium};
display: flex;

`
const StyledTitle = styled.p`
   color: ${props => props.theme.colors.primary};
   user-select: none;
`
const LanguagesList = styled.ul`
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


class SpokenLanguages extends React.Component {
    render() {
        // destructure props
        const { spokenLanguages } = this.props;
        // map over array and return each item
        const spokenLanguagesName =
            spokenLanguages && spokenLanguages.map((item, key) =>
                <li key={key} className={`sl__item sl__item--${convertToClassName(item.name)}`}>{item.name}</li>
            );

        return (
            <LanguagesWrap>
                <StyledTitle>Spoken Languages:</StyledTitle>
                <LanguagesList>{spokenLanguagesName}</LanguagesList>
            </LanguagesWrap>

        )
    }
}

export default SpokenLanguages