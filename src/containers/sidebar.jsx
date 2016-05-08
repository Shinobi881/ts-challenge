import React, { Component } from 'react';
import reports from '../../data';

class SideBar extends Component {
  constructor() {
    super();
    this.state = { reports };
  }
  renderReports() {
    return this.state.reports.map((report, index) => (
      <div className='report' key={index}>
        <h3>{report.title}</h3>
      </div>
    ));
  }
  render() {
    console.log(reports);
    return (
      <div>
        <div className='report-list'>
          {this.renderReports()}
        </div>
        <div className='report-detail'>
          <p>Report Detail</p>
        </div>
      </div>
    );
  }
}

export default SideBar;
