import React from 'react';
import styled from 'styled-components';

const StyledLanguage = styled.p`
user-select:none;
font-family: ${props => props.theme.font.medium};
margin-bottom: ${props => props.theme.spacers.xsmall};
span{
    color: ${props => props.theme.colors.light};
    margin-left: ${props => props.theme.spacers.small};  
}
@media ${({ theme }) => theme.mediaQueries.below600}{
    font-size: ${ props => props.theme.fontSizes.xsmall};
}
`


class Language extends React.Component {
    // function to capitalize word
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const { language } = this.props;
        return (
            <React.Fragment>
                {language && <StyledLanguage>Original language:<span>{this.Capitalize(language)}</span></StyledLanguage>}
            </React.Fragment>
        )
    }
}

export default Language