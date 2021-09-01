// From: https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './auth';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        return token ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
