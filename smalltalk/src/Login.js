import React, { Component } from 'react';
import logo from './images/whitespeech.png';
import './logo.css';

class Login extends Component {
    render() {
        return(
            <div>
                <img className="largeLogo" src={logo} alt="smalltalk logo"/>
                <h1 className="logoName">SmallTalk</h1>
                <h2>Ready, set, let's chat!</h2>
            </div>
        )
    }
}

export default Login