import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Title from './AppTitle'
import logo from '../../images/logo.png'
import Search from '../Search'

const StyledWrap = styled.section`
background-color: ${props => props.theme.colors.dark};
filter: brightness(1.2);
`
const TopBarContent = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
max-width: 1280px;
margin: 0 auto;
color: ${props => props.theme.colors.light};
padding: ${props => props.theme.spacers.medium} 0;
border-bottom: 3px solid ${props => props.theme.colors.primary};
@media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: ${props => props.theme.spacers.medium};
}
`

const LogoTitleWrap = styled.div`
a{
text-decoration: none;
display:flex;
align-items:center;
flex-wrap:wrap;
img{
    max-width: 30px;
    width:100%;
    height:100%;
    margin-right: ${props => props.theme.spacers.small};
    transition: 0.3s ease-in-out;
    transform: rotate(10deg);
}
&:hover{
    img{
        transform: rotate(220deg) scale(1.2);
    }
}
}
`

const TopBar = ({ fetchMovies, searchState, path }) => {
    return (
        <StyledWrap>
            <TopBarContent>
                <LogoTitleWrap>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                        <Title />
                    </Link>
                </LogoTitleWrap>
                {path && <Search fetchMovies={fetchMovies} searchState={searchState} />}
            </TopBarContent>
        </StyledWrap>

    )
}
export default TopBar