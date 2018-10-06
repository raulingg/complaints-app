import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComplaintFormComponent from './ComplaintForm';
import { startAddComplaint as startAddComplaintAction } from '../actions/complaints';

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
const mapStateToProps = (state, props) => ({
  complaint: state.complaints.find(complaint => complaint.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  startAddComplaint: complaint => dispatch(startAddComplaintAction(complaint)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComplaintPage);
