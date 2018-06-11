import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Events from './Events';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        {/* <Home /> */}
        {/* <Events /> */}
      </div>
    );
  }
}

export default App;
