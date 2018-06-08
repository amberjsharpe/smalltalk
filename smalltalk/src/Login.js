import React, { Component } from 'react';
import logo from './images/whitespeech.png';
import './logo.css';
import './button.css';

class Login extends Component {
    render() {
        return(
            <div>
                <div className="d-flex flex-column align-items-center">
                    <div className="pt-5">
                        <img className="largeLogo" src={logo} alt="smalltalk logo"/>
                        <h1 className="logoName pb-5">SmallTalk</h1>
                    </div>
                    <h2 className="pt-5"><strong>Ready, set, let's chat!</strong></h2>
                </div>
                <button className="stickToBottom longButton backgroundYellow">
                    <strong>LOGIN</strong>
                </button>   
            </div>
        )
    }
}

export default Login