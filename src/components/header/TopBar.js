import React from 'react'
import styled from 'styled-components'

import Title from './AppTitle'

const StyledWrap = styled.section`
background-color: ${props => props.theme.colors.dark};
`
const TopBarContent = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
max-width: 1280px;
margin: 0 auto;
color: ${props => props.theme.colors.light};
padding: ${props => props.theme.spacers.medium} 0;
border-bottom: 2px solid ${props => props.theme.colors.primary};
@media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: ${props => props.theme.spacers.medium};
}
`

const TopBar = () => {
    return (
        <StyledWrap>
            <TopBarContent>
                <Title />
                <p>Search</p>
            </TopBarContent>

        </StyledWrap>

    )
}
export default TopBar