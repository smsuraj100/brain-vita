import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./home"));

const Routes = () => (
  <Suspense fallback={""}>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
  </Suspense>
);

export default Routes;
