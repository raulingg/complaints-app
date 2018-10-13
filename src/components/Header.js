import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout as startLogoutAction } from '../actions/auth';
import * as HeaderStyles from '../styles/components/Header';
import ContentContainer from '../styles/components/ContentContainer';
import { ButtonLink } from '../styles/components/Buttons';

export const Header = ({ isAuthenticated, startLogout }) => (
  <HeaderStyles.Header>
    <ContentContainer>
      <HeaderStyles.Content>
        <HeaderStyles.Title to="/">
          <h1>Denuncias</h1>
        </HeaderStyles.Title>
        {isAuthenticated ? (
          <ButtonLink onClick={startLogout}>Salir</ButtonLink>
        ) : (
          <ButtonLink as={Link} to="/login">
            Iniciar sesión
          </ButtonLink>
        )}
      </HeaderStyles.Content>
    </ContentContainer>
  </HeaderStyles.Header>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogoutAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
