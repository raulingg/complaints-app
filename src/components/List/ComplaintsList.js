import React from 'react';
import { connect } from 'react-redux';

export const ComplaintsList = props => {
  const { complaints } = props;

  return (
    <div>
      <div>
        <div>Denuncia</div>
        <div>Tipo</div>
        <div>Fecha</div>
      </div>
      <div>
        {complaints.length === 0 ? (
          <div>
            <span>No encontramos ninguna denuncia.</span>
          </div>
        ) : (
          complaints.map(complaint => (
            <div key={complaint.id}>
              <p>
                <div>{complaint.title}</div>
                <div>{complaint.content}</div>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  complaints: state.complaints,
});

export default connect(mapStateToProps)(ComplaintsList);
