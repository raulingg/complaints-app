import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin as startLoginAction } from '../actions/auth';

export const LoginPage = ({ history, startLogin }) => {
  const onClick = async () => {
    await startLogin();
    history.push('/');
  };

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Boilerplate</h1>
        <p>Tag line for app.</p>
        <button className="button" onClick={onClick}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLoginAction()),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginPage)
);
