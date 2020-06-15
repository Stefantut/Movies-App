import { createGlobalStyle } from 'styled-components'
import '../fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
html {
    height:100%;
    font-family: RobotoRegular;
}

* {
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

li{
    list-style-type: none;
}

`;

export default GlobalStyle;