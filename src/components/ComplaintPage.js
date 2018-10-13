import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export const ComplaintPage = ({ complaint }) => (
  <div>
    <div>
      <img src={complaint.user.photoURL} alt="" />
      <span>{complaint.user.displayName}</span>
    </div>
    <div>
      <h1>{complaint.title}</h1>
      <p>
        <span>Denunciado el {moment(complaint.happenedAt).format()}</span>
      </p>
      <p>
        Denuncia a: <span>{complaint.reportTo}</span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: complaint.content }} />
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  complaint: state.complaints.find(complaint => String(complaint.id) === props.match.params.id),
});

export default connect(mapStateToProps)(ComplaintPage);
