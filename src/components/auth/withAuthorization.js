import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const withAuthorization = ChildComponent => {
  class WithAuthorization extends Component {
    componentDidMount() {
      const { history } = this.props;
      auth.onAuthStateChanged(user => {
        if (!user) {
          history.push('/login');
        }
      });
    }

    render() {
      const { isAuthenticated } = this.props;
      return isAuthenticated ? <ChildComponent {...this.props} /> : null;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.user,
  });

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(WithAuthorization);
};

export default withAuthorization;
