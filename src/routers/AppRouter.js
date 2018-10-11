import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import LoginPageComponent from '../components/LoginPage';
import HomePageComponent from '../components/HomePage';
import ComplaintPageComponent from '../components/ComplaintPage';
import AddComplaintPageComponent from '../components/AddComplaintPage';
import EditComplaintPageComponent from '../components/EditComplaintPage';
import withAuthentication from '../components/auth/withAuthentication';
import HeaderComponent from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={HomePageComponent} exact />
        <Route path="/show/:id" component={ComplaintPageComponent} exact />
        <Route path="/login" component={LoginPageComponent} exact />
        <Route path="/add" component={AddComplaintPageComponent} exact />
        <Route path="/edit/:id" component={EditComplaintPageComponent} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default withAuthentication(AppRouter);
