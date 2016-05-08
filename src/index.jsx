import React, { Component } from 'react';
import axios from 'axios';

axios.get('/reports')
  .then((res) => {
    console.log('Logging response', res);
  })
class App extends Component {
  render() {
    return (
      <div>
        <h1>Testing 123</h1>
      </div>  
    )
  }
}

export default App;