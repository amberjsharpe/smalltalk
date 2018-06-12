import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './user.css';

class User extends Component {


    render(props) {
        console.log(this.props)
        return(
            <div className="d-flex flex-column align-items-center home">
                <div className="pt-5">
                    <img src={this.props.user.photoURL} alt="user"/>
                </div>
                <div className="pt-3">
                    <h2>Hello, {this.props.user.displayName}!</h2>
                </div>
                <div className="pt-5">
                    <button className="mediumBtn backgroundYellow boxShadow">
                        <strong><Link to="/events">FIND SMALL TALK</Link></strong>
                    </button>
                </div>
                <div className="stickToBottom">
                    <button className="longBtn backgroundRed">
                        <h2>FAVORITES</h2>
                    </button>
                    <button className="longBtn backgroundPurple">
                        <h2>EVENTS</h2>
                    </button>
                    <button className="longBtn backgroundGray">
                        <h2>LOGOUT</h2>
                    </button>
                </div>
            </div>
        )
    }
}

export default User