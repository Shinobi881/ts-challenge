import React, { Component } from 'react';

class ReportDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }
  componentWillMount() {
    this.forceUpdate();
  }
  renderDetails() {
    // console.log(this.props);
    let detail = this.props.activeReport;

    // if (!this.props.reportDetail) {
    //   return <div><h1>No Report Selected</h1></div>;
    // }

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
