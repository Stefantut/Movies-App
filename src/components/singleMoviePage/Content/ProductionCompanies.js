import React from 'react';
import styled from 'styled-components';

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

const ProductionCompanies = ({ productionCompanies }) => {
    return (
        <CompaniesWrap>
            <StyledTitle>Production Companies:</StyledTitle>
            <CompaniesList>{productionCompanies}</CompaniesList>
        </CompaniesWrap>
    )
}

export default ProductionCompanies