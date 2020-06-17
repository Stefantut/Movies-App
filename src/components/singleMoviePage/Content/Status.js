import React from 'react';
import styled from 'styled-components';

const StatusWrap = styled.p`
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

const Status = ({ status }) => {
    return (
        <StatusWrap>Status:<span>{status}</span></StatusWrap>
    )
}

export default Status