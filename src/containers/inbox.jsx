import React, { Component } from 'react';
import TopBar from '../components/topbar.jsx';
import SideBar from './sidebar.jsx';
import ReportDetail from '../components/report-detail.jsx';
import reports from '../../data';

class Inbox extends Component {
  constructor() {
    super();
    this.state = { reportDetail: reports[0], reports };
  }
  render() {
    return (
      <div id='inbox'>
        <TopBar />
        <div id="content">
          <SideBar {...this.state.reports} />
          <ReportDetail {...this.state} />
        </div>
      </div>
    );
  }
}

export default Inbox;
