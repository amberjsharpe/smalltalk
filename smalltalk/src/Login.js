import React, { Component } from 'react';
import logo from './images/whitespeech.png';
import './logo.css';
import './button.css';

class Login extends Component {
    render(props) {
        return(
            <div>
                <img className="largeLogo" src={logo} alt="smalltalk logo"/>
                <h1 className="logoName">SmallTalk</h1>
                <h2>Ready, set, let's chat!</h2>
                <button className="stickToBottom longButton backgroundYellow">
                    <strong>LOGIN</strong>
                </button>
            </div>
        )
    }
}

export default Login