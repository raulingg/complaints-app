import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startAddComplaint as startAddComplaintAction } from '../actions/complaints';

export class ComplaintForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.complaint ? props.complaint.title : '',
      content: props.complaint ? props.complaint.content : '',
      reportTo: props.complaint ? props.complaint.reportTo : '',
      happenedAt: props.complaint ? moment(props.complaint.happenedAt) : moment(),
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onContentChange = e => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };

  onReportToChange = e => {
    const reportTo = e.target.value;
    this.setState(() => ({ reportTo }));
  };

  onHappenedAtChange = e => {
    const happenedAt = e.target.value;
    this.setState(() => ({ happenedAt }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, content, happenedAt, reportTo } = this.state;
    const { startAddComplaint, history } = this.props;
    startAddComplaint({
      title,
      content,
      happenedAt,
      reportTo,
    });
    history.push('/');
  };

  render() {
    const { title, content, happenedAt, reportTo } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text" name="title" value={title} onChange={this.onTitleChange} />
        </div>
        <div>
          <textarea
            name="content"
            maxLength="2000"
            rows="10"
            value={content}
            onChange={this.onContentChange}
          />
        </div>
        <div>
          <input
            type="date"
            name="happenedAt"
            value={happenedAt}
            onChange={this.onHappenedAtChange}
          />
        </div>
        <div>
          <input type="text" name="reportTo" value={reportTo} onChange={this.onReportToChange} />
        </div>
        <div>
          <button className="button">Guardar cambios</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddComplaint: complaint => dispatch(startAddComplaintAction(complaint)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(ComplaintForm);
