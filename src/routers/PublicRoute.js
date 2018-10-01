import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import HeaderComponent from '../components/Header';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
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

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
