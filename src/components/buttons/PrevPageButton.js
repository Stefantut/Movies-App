import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
background-color:${(props => props.theme.colors.primary)};
color: ${(props => props.theme.colors.tertiary)};
outline: thin;
border: none;
padding: ${(props => props.theme.spacers.small)} ${(props => props.theme.spacers.large)};
transition: 0.1s ease-in;

&:hover{
    cursor:pointer;
    color: ${props => props.theme.colors.lightgrey};
    box-shadow: 0 0 0 1px  ${props => props.theme.colors.lightgrey} inset;
}
@media ${({ theme }) => theme.mediaQueries.below850}{
font-size: ${({ theme }) => theme.fontSizes.xsmall};
padding: ${(props => props.theme.spacers.small)};
}
@media ${({ theme }) => theme.mediaQueries.below600}{
margin-bottom: ${(props => props.theme.spacers.large)};
}
`;

const PrevPageButton = ({ prev }) => {
    return (
        <StyledButton onClick={prev}>Prev Page</StyledButton>
    )
}

PrevPageButton.propTypes = {
    prev: PropTypes.func,
}
export default PrevPageButton