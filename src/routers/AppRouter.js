import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPageComponent from '../components/LoginPage';
import ComplaintsListComponent from '../components/List/ComplaintsList';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddComplaintPageComponent from '../components/AddComplaintPage';
import EditComplaintPageComponent from '../components/EditComplaintPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={ComplaintsListComponent} exact />
        <PublicRoute path="/login" component={LoginPageComponent} />
        <PrivateRoute path="/add" component={AddComplaintPageComponent} />
        <PrivateRoute path="/edit/:id" component={EditComplaintPageComponent} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
