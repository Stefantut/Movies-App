import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
max-width: ${props => props.theme.content.medium};
margin: 0 auto;
color: ${props => props.theme.colors.light};
padding: ${props => props.theme.spacers.medium} 0;
border-bottom: 3px solid ${props => props.theme.colors.primary};
a{
    text-decoration: none;
}
@media ${({ theme }) => theme.mediaQueries.below1300}{
    padding: ${props => props.theme.spacers.medium};
}
`

const LogoTitleWrap = styled.div`

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
    cursor:pointer;
    img{
        transform: rotate(220deg) scale(1.2);
    }
}

`

function TopBar({ fetchMovies, searchState, path }) {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <StyledWrap>
            <TopBarContent>
                <Link to='/'>
                    <LogoTitleWrap onClick={refreshPage}>
                        <img src={logo} alt="logo" />
                        <Title />
                    </LogoTitleWrap>
                </Link>
                {path && <Search fetchMovies={fetchMovies} searchState={searchState} />}
            </TopBarContent>
        </StyledWrap>

    )
}
export default TopBar