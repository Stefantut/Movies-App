import React from 'react';
import styled from 'styled-components';
import { convertToClassName } from '../../../helpers'

const CompaniesWrap = styled.div`
margin-bottom: ${props => props.theme.spacers.xsmall};
font-family: ${props => props.theme.font.medium};
display: flex;

`
const StyledTitle = styled.p`
   color: ${props => props.theme.colors.primary};
   user-select: none;
`
const CompaniesList = styled.ul`
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

function ProductionCompanies({ productionCompanies }) {
    // loop through production countries array and return each one
    const company = productionCompanies && productionCompanies.map((item, key) =>
        <li key={key} className={`pc__item pc__item--${convertToClassName(item.name)}`}>{item.name}</li>
    );
    return (
        <CompaniesWrap>
            <StyledTitle>Production Companies:</StyledTitle>
            <CompaniesList>{company}</CompaniesList>
        </CompaniesWrap>
    )
}

export default ProductionCompanies