import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin as startLoginAction } from '../actions/auth';
import * as LoginPageStyles from '../styles/components/LoginPage';

export const LoginPage = ({ history, startLogin }) => {
  const onClick = async e => {
    await startLogin(e.target.dataset.provider);
    history.push('/');
  };

  return (
    <LoginPageStyles.Container>
      <LoginPageStyles.Box>
        <LoginPageStyles.Title>Denuncia Perú App</LoginPageStyles.Title>
        <p>Haz tu denuncia, no calles!.</p>
        <LoginPageStyles.ButtonGoogle onClick={onClick} data-provider="google">
          Login con Google
        </LoginPageStyles.ButtonGoogle>
        <LoginPageStyles.ButtonFacebook onClick={onClick} data-provider="facebook">
          Login con Facebook
        </LoginPageStyles.ButtonFacebook>
      </LoginPageStyles.Box>
    </LoginPageStyles.Container>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: provider => dispatch(startLoginAction(provider)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(LoginPage)
);
