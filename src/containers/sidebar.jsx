import React, { Component } from 'react';
import Report from '../components/report.jsx';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  renderReports() {
    let p = this.props;
    let reports = () => {
      return p.filteredReports ? p.filteredReports : p.allReports;
    };

    return reports().map((reportData, index) => (
      <Report key={index} ref={`report${index}`} {...reportData} />
    ));
  }
  render() {
    return (
      <div id="side-bar">
        <ul id='report-list'>
          {this.renderReports()}
        </ul>
      </div>
    );
  }
}

export default SideBar;
