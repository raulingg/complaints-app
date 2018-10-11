import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { login as loginAction, logout as logoutAction } from '../../actions/auth';

const withAuthentication = ChildComponent => {
  class WithAuthentication extends Component {
    componentDidMount() {
      const { login, logout } = this.props;
      auth.onAuthStateChanged(user => {
        if (user) {
          login(user);
        } else {
          logout();
        }
      });
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    login: user => dispatch(loginAction(user)),
    logout: () => dispatch(logoutAction()),
  });

  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication);
};

export default withAuthentication;
