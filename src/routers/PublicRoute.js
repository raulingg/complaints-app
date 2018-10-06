import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import HeaderComponent from '../components/Header';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <HeaderComponent />
        <Component {...props} />
      </div>
    )}
  />
);

export default withRouter(PublicRoute);
