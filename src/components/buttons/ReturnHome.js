import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled.div`
a{
    color:${props => props.theme.colors.primary}
}
&:hover{
  a{

  color:${props => props.theme.colors.lightgrey}
  }  
}
`
const ReturnHome = () => {
    return (
        <StyledLink>
            <Link to='/'>Return to All Movies List</Link>
        </StyledLink>
    )
}
export default ReturnHome