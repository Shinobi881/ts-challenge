import React, { Component } from 'react';
import axios from 'axios';

axios.get('/reports')
  .then((res) => {
    console.log('Logging response', res);
    // console.log('this works')
  })

console.log('test')
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