import React, { Component } from 'react';
import headshot from './images/headshot.jpg';
import './user.css';

class Home extends Component {
    render() {
        return(
            <div className="d-flex flex-column align-items-center home">
                <div className="pt-5">
                    <img src={headshot} alt="user"/>
                </div>
                <div className="pt-3">
                    <h2>Hello, Amber!</h2>
                </div>
                <div className="pt-5">
                    <button className="mediumBtn backgroundYellow boxShadow">
                        <strong>FIND SMALL TALK</strong>
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

export default Home