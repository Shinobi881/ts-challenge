import React, { Component } from 'react';
import TopBar from '../components/topbar.jsx';
import { connector } from '../store/store.js';
import SideBar from './sidebar.jsx';
import ReportDetail from '../components/report-detail.jsx';

class Inbox extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchReportsAction();
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div id='inbox'>
        <TopBar />
        <div id="content">
          <SideBar {...this.props} />
          <ReportDetail {...this.props} />
        </div>
      </div>
    );
  }
}

export default connector(Inbox);
