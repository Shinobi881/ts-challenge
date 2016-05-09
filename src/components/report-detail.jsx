import React, { Component } from 'react';

class ReportDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }
  renderDetails() {
    let detail = this.props.reportDetail;

    if (!this.props.reportDetail) {
      return <div><h1>No Report Selected</h1></div>;
    }

    return (
      <div>
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
      <div id="report-detail">{this.renderDetails()}</div>
    );
  }
}

export default ReportDetail;
