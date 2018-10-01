import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import database, { auth } from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startSetComplaints } from './actions/complaints';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import complaints from './tests/fixtures/complaints';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const complaintsData = {};
complaints.forEach(complaint => {
  complaintsData[complaint.id] = { ...complaint };
});
database
  .ref('complaints')
  .set(complaintsData)
  .then(() => {
    auth.onAuthStateChanged(user => {
      store.dispatch(startSetComplaints()).then(() => {
        if (user) {
          store.dispatch(login(user.uid));
          renderApp();
        } else {
          store.dispatch(logout());
          renderApp();
          history.push('/');
        }
      });
    });
  });
