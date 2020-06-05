import React from "react";
import styled from 'styled-components'
import { europeanDateFormat } from "../../../helpers";

const StyledDate = styled.p`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
span{
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};
}
`
function ReleaseDate({ release }) {
    return (
        <StyledDate>
            Release Date: <span>{europeanDateFormat(release)}</span>
        </StyledDate>
    );
}


export default ReleaseDate;