import React, { Component } from 'react';
import logo from './images/whitespeech.png';
import './logo.css';
import './button.css';
import './user.css';

class Header extends Component {


    render(props) {
        console.log(this.props)
        return(
            <div className="pt-4 pr-4 pl-4">
                <header className="d-flex justify-content-between header">
                    <img src={logo} alt="logo"/>
                    <div>
                    <img className="userHeader" src={this.props.user.photoURL} alt="user"/>
                    <h5 onClick={this.props.logout} className="pl-2">LOGOUT</h5>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
