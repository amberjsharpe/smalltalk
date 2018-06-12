import React, { Component } from 'react';
import { googleProvider, rebase } from './base';
import logo from './images/whitespeech.png';
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

    this.saveUser = this.saveUser.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  // Saves user to Firebase and sets state to logged in based on uid
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
            loggedin: user.uid,
            authed: true
        });
        console.log(this.state.authed===true)
    })
}

// Logins into app using Google Popup sign-in and renders saveUser() with user info 
loginWithGoogle() {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
        this.saveUser(data.user);
    })
}

  render() {
    console.log(this.state.authed === true)

    if (this.state.authed === false) {
         return (
          <div className="App">
              <div>
                  <div className="d-flex flex-column align-items-center">
                      <div className="login pt-5">
                          <img src={logo} alt="smalltalk logo"/>
                          <h1 className="logoName pb-5">SmallTalk</h1>
                      </div>
                      <h3 className="pt-5">Ready, set, let's chat!</h3>
                  </div>
              </div>
              <button onClick={this.loginWithGoogle} className="stickToBottom longBtn backgroundYellow">
                  <h2>LOGIN</h2>
              </button>
          </div>
      )
    } 
  }
}

export default App;
