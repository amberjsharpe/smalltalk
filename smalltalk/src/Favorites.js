import React, { Component } from 'react';
import Header from './Header';
import './button.css';

class Favorites extends Component {
    render() {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <button className="mt-3 longBtn backgroundRed">
                    <h2>FAVORITES</h2>
                </button>   
            </div>
        )
    }
}

export default Favorites