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
        <div id='filter-container'>
          <input
            id='filter-form'
            placeholder='Filter...'
            onChange={this.handleChange}
          />
        </div>
        </form>
      </div>
    );
  }
}

export default connector(Filter);
