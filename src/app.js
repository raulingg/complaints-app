import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import database, { auth } from './firebase/firebase';
import { login, logout } from './actions/auth';
import { startSetComplaints } from './actions/complaints';
import 'normalize.css/normalize.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
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
          const history = createHistory();
          history.push('/');
        }
      });
    });
  });
