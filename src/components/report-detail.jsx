import React, { Component } from 'react';

class ReportDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }
  renderDetails() {
    let detail = this.props.activeReport;

    return (
      <div id='report-detail' >
        <div>
          <h1>{detail.title}</h1>
        </div>
        <div>
          <p>{detail.body}</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div id='detail-container' className='content'>{this.renderDetails()}
      </div>
    );
  }
}

export default ReportDetail;
