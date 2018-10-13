import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin as startLoginAction } from '../actions/auth';
import * as LoginPageStyles from '../styles/components/LoginPage';
import Button from '../styles/components/Buttons';

export const LoginPage = ({ history, startLogin }) => {
  const onClick = async () => {
    await startLogin();
    history.push('/');
  };

  return (
    <LoginPageStyles.Container>
      <LoginPageStyles.Box>
        <LoginPageStyles.Title>Denuncia Perú App</LoginPageStyles.Title>
        <Button onClick={onClick}>Login con Google</Button>
        <p>Haz tu denuncia, no calles!.</p>
      </LoginPageStyles.Box>
    </LoginPageStyles.Container>
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
