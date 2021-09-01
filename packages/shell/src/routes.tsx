import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import Login from 'login/Login';
// eslint-disable-next-line import/no-unresolved
import Home from 'home/Home';
import { useAuth } from './auth';
import { PrivateRoute } from './private-route';

const Routes: React.FC = () => {
  const { userId } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {userId && (
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        )}
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
