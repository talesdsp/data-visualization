import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Profile } from "./index";
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
      </Switch>
    </BrowserRouter>
  );
};

const Root = () => {
  return <a href="/github">github</a>;
};

export default Router;
