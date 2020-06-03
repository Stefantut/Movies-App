import React from 'react';
import styled from 'styled-components'

const StyledVote = styled.div`
font-family: ${ props => props.theme.font.bold};
font-size: ${ props => props.theme.fontSizes.medium};
color: ${ props => props.theme.colors.light};
margin: 0 ${ props => props.theme.spacers.xtralarge};
padding-top: ${ props => props.theme.spacers.small};
user-select: none;
.vote-result{
    color: ${ props => props.theme.colors.primary};
}
`

const HeaderVote = ({ vote }) => {
    return (
        <StyledVote className='header__item header__item--vote'>Vote: <span className='vote-result'>{vote}</span></StyledVote>
    )
}
export default HeaderVote