import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/add" className="button">
          Denunciar
        </Link>
        {complaints.length === 0 ? (
          <div>
            <span>No encontramos ninguna denuncia.</span>
          </div>
        ) : (
          complaints.map(complaint => (
            <div key={complaint.id}>
              <p>
                <Link to={`/edit/${complaint.id}`}>{complaint.title}</Link>
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
