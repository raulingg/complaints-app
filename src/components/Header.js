import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout as startLogoutAction, startLogin as startLoginAction } from '../actions/auth';

export const Header = ({ isAuthenticated, startLogout, startLogin }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Denuncias</h1>
        </Link>
        {isAuthenticated ? (
          <button className="button button--link" onClick={startLogout}>
            Salir
          </button>
        ) : (
          <button className="button button--link" onClick={startLogin}>
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogoutAction()),
  startLogin: () => dispatch(startLoginAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
