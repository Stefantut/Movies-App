import React from 'react';
import styled from 'styled-components';
import { formatWithDots } from '../../../helpers'

const StyledBudget = styled.p`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
span{
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};
}
@media ${({ theme }) => theme.mediaQueries.below600}{
    font-size: ${ props => props.theme.fontSizes.xsmall};
}
`

function Budget({ budget }) {

    const formattedBudget = budget && formatWithDots(budget);
    return (
        <StyledBudget>Budget:<span>${formattedBudget}</span></StyledBudget>
    )
}

export default Budget