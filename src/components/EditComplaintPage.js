import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComplaintFormComponent from './ComplaintForm';
import { startEditComplaint as startEditComplaintAction } from '../actions/complaints';

export class EditComplaintPage extends Component {
  onSubmit = updates => {
    const {
      history,
      startEditComplaint,
      complaint: { id },
    } = this.props;
    startEditComplaint(id, updates);
    history.push('/');
  };

  render() {
    const { complaint } = this.props;
    return (
      <div>
        <h1>Editar denuncia </h1>
        <ComplaintFormComponent complaint={complaint} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  complaint: state.complaints.find(complaint => String(complaint.id) === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  startEditComplaint: (id, complaint) => dispatch(startEditComplaintAction(id, complaint)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComplaintPage);
