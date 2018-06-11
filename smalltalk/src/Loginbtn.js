import React, { Component } from 'react';
import { googleProvider, rebase } from './base';
import Home from './Home';
import './button.css';

class Loginbtn extends Component {

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
        })
    }

    loginWithGoogle() {
		return rebase.initializedApp.auth().signInWithPopup(googleProvider)
		.then((data) => {
			this.saveUser(data.user);
		})
	}

    render() {
        return(
            <button onClick={this.loginWithGoogle} className="stickToBottom longBtn backgroundYellow">
                <h2>LOGIN</h2>
            </button>
        )
    }
}

export default Loginbtn