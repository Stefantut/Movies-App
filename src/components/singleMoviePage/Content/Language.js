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
`


class Language extends React.Component {
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const { language } = this.props;
        console.log(typeof (language));
        console.log(language);
        return (
            <React.Fragment>
                {language && <StyledLanguage>Original language<span>{this.Capitalize(language)}</span></StyledLanguage>}
            </React.Fragment>
        )
    }
}

export default Language