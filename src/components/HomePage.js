import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSetComplaints as startSetComplaintsAction } from '../actions/complaints';
import LoadingPage from './LoadingPage';

export class HomePage extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    const { startSetComplaints } = this.props;
    await startSetComplaints();
    this.setState({ isLoading: false });
  }

  render() {
    const { complaints } = this.props;
    const { isLoading } = this.state;

    return isLoading ? (
      <LoadingPage />
    ) : (
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
                  <Link to={`show/${complaint.id}`}>{complaint.title}</Link>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  complaints: state.complaints,
});

const mapDispatchToProps = dispatch => ({
  startSetComplaints: () => dispatch(startSetComplaintsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
