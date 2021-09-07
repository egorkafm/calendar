import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRouters, publicRouters, RouteNames } from "../router";

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    isAuth ? 
      <Switch>
        {privateRouters.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to={RouteNames.EVENT} />
      </Switch>
      :
      <Switch>
        {publicRouters.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to={RouteNames.LOGIN} />
      </Switch>
  )
};

export default AppRouter;
