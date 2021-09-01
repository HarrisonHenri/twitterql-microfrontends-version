import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import Login from 'login/Login';

import React from 'react';
import { useAuth } from './auth';
import { PrivateRoute } from './private-route';

const FrameRouter: React.FC<{ children: any; path: string }> = ({
  children,
  path = 'home',
}) => {
  const { token } = useAuth();

  return (
    <Router>
      <Switch>
        {token && (
          <Route exact path="/">
            <Redirect to={path} />
          </Route>
        )}
        <Route path="/" exact>
          <Login />
        </Route>
        <PrivateRoute path={path} exact>
          {children}
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default FrameRouter;
