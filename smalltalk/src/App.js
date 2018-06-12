import React, { Component } from 'react';
import Login from './Login';
import User from './User';
import './App.css';
import './logo.css';
import './button.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      loggedin: '',
      authed: false
    }
  }

  render() {
    console.log(this.state.authed === true)

    if (this.state.authed === false) {
         return (
          <div> 
            <Login loggedin={this.state.loggedin} authed={this.state.authed}/>
          </div>
      )
    } 
  }
}

export default App;
