import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Financial, Home, Profile } from "./index";
import store from "./Profile/store";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />

        <Route exact path="/github" component={Home} />

        <Provider store={store}>
          <Route exact path="/github/:username" component={Profile} />
        </Provider>

        <Route exact path="/financial" component={Financial} />
      </Switch>
    </BrowserRouter>
  );
};

const Root = () => {
  return (
    <>
      <a href="/github">github</a>
      <a href="/financial">financial</a>
    </>
  );
};

export default Router;
