import React from 'react'
import styled from 'styled-components';
import devices from '../../images/devices.jpg'
import Overlay from '../misc/Overlay'

const StyledWrap = styled.section`
height:40vh;
background-color: ${props => props.theme.colors.dark};
color: ${props => props.theme.colors.light}
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  height:100%;
  max-width: ${props => props.theme.content.medium};
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
`

const Left = styled.div`
height:100%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
padding: 0 ${props => props.theme.spacers.xxxlarge};
user-select:none;
.title{
    font-size: ${props => props.theme.fontSizes.xxxlarge};
    text-align: center;
    @media ${({ theme }) => theme.mediaQueries.below850}{
        font-size: ${props => props.theme.fontSizes.large};
}
}
.more-info{
    text-align: center;
    margin-top: ${props => props.theme.spacers.xlarge};
    font-size: ${props => props.theme.fontSizes.large};
    font-family: ${props => props.theme.font.light};

 @media ${({ theme }) => theme.mediaQueries.below850}{
      font-size: ${props => props.theme.fontSizes.small};
     }
    }
`
const Right = styled.div`
height:100%;
width:100%;
background-image: url(${props => props.image});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
position: relative;
z-index: 0;
`
function Enjoy() {
    return (
        <StyledWrap>
            <Content>
                <Left>
                    <h3 className="title">Enjoy our movies.</h3>
                    <p className='more-info'>Find out more details about your favorite movies. We find movies for you to watch. Search now!</p>
                </Left>
                <Right image={devices}>
                    <Overlay />
                </Right>
            </Content>
        </StyledWrap>
    )
}

export default Enjoy