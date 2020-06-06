import React from 'react';
import styled from 'styled-components';
import { formatWithDots } from '../../../helpers'

const StyledRevenue = styled.p`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
span{
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};
}
`

function Revenue({ revenue }) {
    const formattedRevenue = revenue && formatWithDots(revenue);
    return (
        <StyledRevenue>Revenue:<span>${formattedRevenue}</span></StyledRevenue>
    )
}

export default Revenue