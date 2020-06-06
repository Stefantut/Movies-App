import React from 'react';
import styled from 'styled-components';

const CountriesWrap = styled.div`
margin-bottom: ${props => props.theme.spacers.xsmall};
font-family: ${props => props.theme.font.medium};
display: flex;

`
const StyledTitle = styled.p`
   color: ${props => props.theme.colors.primary};
   user-select: none;
`
const CountriesList = styled.ul`
user-select:none;
display: flex;
flex-wrap: wrap;
margin-left: ${props => props.theme.spacers.small};
list-style-type: none;
li{
   color: ${props => props.theme.colors.light};
   margin-right: ${props => props.theme.spacers.xsmall};
   display: flex;
   flex-wrap: nowrap;
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

const ProductionCountries = ({ productionCountries }) => {
    return (
        <CountriesWrap>
            <StyledTitle>Production Countries:</StyledTitle>
            <CountriesList>{productionCountries}</CountriesList>
        </CountriesWrap>
    )
}

export default ProductionCountries