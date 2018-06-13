import React, { Component } from 'react';
import Header from './Header';
import './button.css';

class Userevents extends Component {
    render() {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <button className="mt-3 longBtn backgroundPurple">
                    <h2>EVENTS</h2>
                </button>   
            </div>
        )
    }
}

export default Userevents