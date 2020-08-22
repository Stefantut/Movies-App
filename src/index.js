import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./utils/globalStyles";
import Theme from "./utils/theme";
import Router from "./components/Router";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById("root")
);
