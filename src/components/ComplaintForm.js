import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import 'react-dates/initialize';

export default class ComplaintForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.complaint ? props.complaint.title : '',
      reportTo: props.complaint ? props.complaint.reportTo : '',
      happenedAt: props.complaint ? moment(props.complaint.happenedAt) : moment(),
      calendarFocused: false,
    };
    if (props.complaint) {
      const contentBlock = htmlToDraft(props.complaint.content);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      this.state.editorState = EditorState.createWithContent(contentState);
    }
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onEditorStateChange = editorState => this.setState({ editorState });

  onReportToChange = e => {
    const reportTo = e.target.value;
    this.setState(() => ({ reportTo }));
  };

  onHappenedAtChange = happenedAt => this.setState(() => ({ happenedAt }));

  onHappenedAtFocusChange = ({ focused }) => this.setState(() => ({ calendarFocused: focused }));

  onSubmit = e => {
    e.preventDefault();
    const { title, editorState, happenedAt, reportTo } = this.state;
    const { onSubmit } = this.props;
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    onSubmit({
      title,
      content,
      happenedAt: happenedAt.valueOf(),
      reportTo,
    });
  };

  render() {
    const { title, editorState, happenedAt, reportTo, calendarFocused } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text" name="title" value={title} onChange={this.onTitleChange} />
        </div>
        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <br />
        <div>
          <SingleDatePicker
            date={happenedAt}
            onDateChange={this.onHappenedAtChange}
            focused={calendarFocused}
            onFocusChange={this.onHappenedAtFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
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
