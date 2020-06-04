import React from 'react';
import styled from 'styled-components';

const StyledBudget = styled.p`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
span{
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};
}
`

const Budget = ({ budget }) => {
    return (
        <StyledBudget>Budget:<span>${budget}</span></StyledBudget>
    )
}

export default Budget