import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export const ComplaintPage = ({ complaint }) => (
  <div>
    <h1>{complaint.title}</h1>
    <p>
      Denuncia: <span>{complaint.reportTo}</span>
    </p>
    <div dangerouslySetInnerHTML={{ __html: complaint.content }} />
    <p>
      <span>Denunciado el {moment(complaint.happenedAt).format()}</span>
    </p>
  </div>
);

const mapStateToProps = (state, props) => ({
  complaint: state.complaints.find(complaint => String(complaint.id) === props.match.params.id),
});

export default connect(mapStateToProps)(ComplaintPage);
