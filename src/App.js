import React, { Component } from 'react';
import './App.css';
import Display from './containers/Display'
import AddTask from './containers/AddTask'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 class="title is-3">TO DO LIST</h1>
        <Display />
        <AddTask />
      </div>
    );
  }
}

export default App;