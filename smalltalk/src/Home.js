import React, { Component } from 'react';
import headshot from './images/headshot.jpg';
import './user.css';

class Home extends Component {
    render() {
        return(
            <div className="d-flex flex-column align-items-center">
                <img src={headshot} alt="user image"/>
                <button className="mediumBtn backgroundYellow">
                    <strong>FIND SMALL TALK</strong>
                </button>
                <div className="stickToBottom">
                    <button className="longBtn backgroundRed">
                        <strong>FAVORITES</strong>
                    </button>
                    <button className="longBtn backgroundPurple">
                        <strong>EVENTS</strong>
                    </button>
                    <button className="longBtn backgroundGray">
                        <strong>LOGOUT</strong>
                    </button>
                </div>   
            </div>
        )
    }
}

export default Home