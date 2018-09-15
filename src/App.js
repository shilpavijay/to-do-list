import React, { Component } from 'react';
import './App.css';
import Display from './containers/Display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title is-3">TO DO LIST</h1>
        <Display />
      </div>
    );
  }
}

export default App;