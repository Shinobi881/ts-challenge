import React, { Component } from 'react';

class ReportDetail extends Component {
  constructor(report) {
    super(report);
    this.state = { data: '' };
  }
  render() {
    return (
      <div id="report-detail"><h1>This works</h1></div>
    );
  }
}

export default ReportDetail;
