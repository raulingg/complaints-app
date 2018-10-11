import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import ComplaintFormComponent from './ComplaintForm';
import { startAddComplaint as startAddComplaintAction } from '../actions/complaints';
import withAuthorization from './auth/withAuthorization';

export class AddComplaintPage extends Component {
  onSubmit = complaint => {
    const { history, startAddComplaint } = this.props;
    startAddComplaint(complaint);
    history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Reporta tu denuncia </h1>
        <ComplaintFormComponent onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddComplaint: complaint => dispatch(startAddComplaintAction(complaint)),
});

export default compose(
  withAuthorization,
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(AddComplaintPage);
