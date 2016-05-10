import React, { Component } from 'react';
import { connector } from '../store/store';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let query = event.target.value;
    let state = this.props;
    this.props.filterReportsAction(state, query);
  }
  render() {
    return (
      <div id='filter'>
        <form>
          <span id='filter-label'>Filter: </span>
          <input
            id='filter-form'
            placeholder='filter your reports'
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default connector(Filter);
