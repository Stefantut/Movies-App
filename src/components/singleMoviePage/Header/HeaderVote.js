import React from 'react';
import styled from 'styled-components'

const StyledVote = styled.div`
display: flex;
align-items: flex-end;
font-family: ${ props => props.theme.font.bold};
font-size: ${ props => props.theme.fontSizes.medium};
color: ${ props => props.theme.colors.light};
margin-left: ${ props => props.theme.spacers.small};
user-select: none;
.vote-result{
    color: ${ props => props.theme.colors.primary};
    margin: 0 ${ props => props.theme.spacers.xsmall};
}
.total{
    font-size: ${ props => props.theme.fontSizes.xsmall};
    color: ${ props => props.theme.colors.lightgrey};
    margin-left: ${ props => props.theme.spacers.xsmall};
}
@media ${({ theme }) => theme.mediaQueries.below1024}{
    font-size: ${ props => props.theme.fontSizes.small};
}
`

const HeaderVote = ({ vote }) => {
    return (
        <StyledVote className='header__item header__item--vote'>Vote: <span className='vote-result'>{vote}</span>/<span className='total'>10</span></StyledVote>
    )
}
export default HeaderVote