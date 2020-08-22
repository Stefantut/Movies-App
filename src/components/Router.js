import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../containers/App";
import SingleMoviePage from "./singleMoviePage/SingleMoviePage";
import NotFound from "../containers/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/movies/:movieId" component={SingleMoviePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
