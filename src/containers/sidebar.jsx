import React, { Component } from 'react';
import _ from 'lodash';
// import reports from '../../data';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }
  renderReports() {
    console.log(this.props);
    return _.map(this.props, (report, index) => (
      <li className='report' key={index}><h3>{report.title}</h3></li>
    ));
  }
  render() {
    return (
      <div id="side-bar">
        <ul className='report-list'>
          {this.renderReports()}
        </ul>
      </div>
    );
  }
}

export default SideBar;
