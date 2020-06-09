import React from 'react';
import styled from 'styled-components'
import { ReactComponent as TmdbLogo } from '../../images/tmdb-logo.svg';

const AppFooterWrap = styled.footer`
  height: ${props => props.theme.spacers.xtralarge};
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.lightgrey};
  display: flex;
  align-items:center;
  `
const StyledContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.content.medium};
  display:flex;
  justify-content: space-evenly;
  `
const StyledLeft = styled.div`
display: flex;
align-items: center;
justify-content: center;
 svg{
      height: 50px;
    }
    @media ${({ theme }) => theme.mediaQueries.below768}{
    svg{
        height:35px;
    }
}
`
const StyledMessage = styled.div`
    color: ${props => props.theme.colors.tertiary};
    user-select: none;
    text-transform: uppercase;
    font-size: ${props => props.theme.fontSizes.xsmall};
    margin-right: ${props => props.theme.spacers.small};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledRight = styled.div`
display: flex;
align-items:center;
user-select: none;
.copy{
    margin-right:${props => props.theme.spacers.xsmall};
}
.credits {
    margin-left:${props => props.theme.spacers.xsmall};
    display: flex;
    a{
        text-decoration: none;
        margin-left:${props => props.theme.spacers.xsmall};
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.font.bold};
        transition: 0.2s ease-in;
        &:hover{
            color: ${props => props.theme.colors.darkgrey};
        }
    }
}
@media ${({ theme }) => theme.mediaQueries.below768}{
    font-size: ${ props => props.theme.fontSizes.xsmall};
}
`
const AppFooter = () => {

    return (
        <AppFooterWrap>
            <StyledContent>
                <StyledLeft>
                    <StyledMessage>
                        <p>Api Provider</p>
                        <p>thank you</p>
                    </StyledMessage>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><TmdbLogo /></a>

                </StyledLeft>
                <StyledRight>
                    <p className='copy'>&copy;</p>
                    <p>{(new Date().getFullYear())}</p>
                    <div className='credits'><p>- Made by </p><a href="/" target="_blank" rel="noopener noreferrer">TSD</a></div>
                </StyledRight>
            </StyledContent>
        </AppFooterWrap>
    )
}

export default AppFooter