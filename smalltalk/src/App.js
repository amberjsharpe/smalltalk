import React, { Component } from 'react';
import { googleProvider, rebase } from './base';
import { Route, withRouter } from 'react-router-dom';
import logo from './images/whitespeech.png';
import User from './User';
import Events from './Events';
import Favorites from './Favorites';
import Party from './events/Party';
import Network from './events/Network';
import Userevents from './Userevents';
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
    this.logout = this.logout.bind(this);
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
            authed: true,
            user: user
        });
    })
  } 

  // Logins into app using Google Popup sign-in and renders saveUser() with user info 
  loginWithGoogle() {
      return rebase.initializedApp.auth().signInWithPopup(googleProvider)
      .then((data) => {
          this.saveUser(data.user);
          this.props.history.push('/user');
      })
  }

  logout() {
    return rebase.initializedApp.auth().signOut()
        .then(() => {
            this.setState({
                loggedin: '',
                authed: false
            })
        })
    }

  render(props) {
    if (!this.state.authed) {   
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
    )} else if (this.state.authed) {
      return (
        <div>
            <Route exact path="/events" component={() => <Events user={this.state.user} state={this.state} logout={this.logout} />}/>
            <Route exact path="/user" component={() => <User user={this.state.user} logout={this.logout} />}/>
            <Route exact path="/events/party" component={() => <Party user={this.state.user} logout={this.state.logout} />}  />
            <Route exact path="/events/network" component={() => <Network user={this.state.user} logout={this.state.logout} />}  />
            <Route exact path="/user/favorites" component={() => <Favorites user={this.state.user} logout={this.logout} />}/>
            <Route exact path="/user/events" component={() => <Userevents user={this.state.user} logout={this.logout} />}/>
        </div>
      )
    }
  } 
}

export default withRouter(App);
