import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { googleProvider, rebase } from './base';
import Loginbtn from './Loginbtn';
import Home from './Home';
import logo from './images/whitespeech.png';
import './App.css';
import './logo.css';
import './button.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        loggedin: ''
    }

    this.saveUser = this.saveUser.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  saveUser (user) {
      return rebase.initializedApp.database().ref().child(`${user.uid}/user`)
      .update({
          email: user.email,
          uid: user.uid, 
          name: user.displayName, 
          image: user.photoURL
      })
      .then(() => {
          this.setState({
              loggedin: user.uid
          });
          console.log(this.state)
      })
  }

  loginWithGoogle() {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    this.saveUser(data.user);
  })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <div className="d-flex flex-column align-items-center">
              <div className="login pt-5">
                <img src={logo} alt="smalltalk logo"/>
                <h1 className="logoName pb-5">SmallTalk</h1>
              </div>
                <h3 className="pt-5">Ready, set, let's chat!</h3>
              </div>
              <button onClick={this.loginWithGoogle} className="stickToBottom longBtn backgroundYellow">
                <h2>LOGIN</h2>
              </button>
              <Route path="/home" component={Home}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
