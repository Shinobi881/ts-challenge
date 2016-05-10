import React, { Component } from 'react';
import _ from 'lodash';
import Report from '../components/report.jsx';
// import reports from '../../data';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { reportDetail: null };
  }
  renderReports() {
    // console.log(this.props);
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
