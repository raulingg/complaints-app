import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout as startLogoutAction } from '../actions/auth';

export const Header = ({ isAuthenticated, startLogout }) => (
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
          <Link className="button button--link" to="/login">
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  </header>
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
