import React, { Component } from 'react';
import logo from './images/whitespeech.png';
import './logo.css';
import './button.css';

class Login extends Component {
    render() {
        return(
            <div>
                <div className="d-flex flex-column align-items-center">
                    <div className="login pt-5">
                        <img src={logo} alt="smalltalk logo"/>
                        <h1 className="logoName pb-5">SmallTalk</h1>
                    </div>
                    <h3 className="pt-5">Ready, set, let's chat!</h3>
                </div>
                <button className="stickToBottom longBtn backgroundYellow">
                    <h2>LOGIN</h2>
                </button>   
            </div>
        )
    }
}

export default Login