import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import './styles/base/globalStyles';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
