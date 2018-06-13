import React, { Component } from 'react';
import Header from './Header';
import Favdiv from './Favdiv';
import './button.css';

class Favorites extends Component {
    render() {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <button className="mt-3 mb-3 longBtn backgroundRed">
                    <h2>FAVORITES</h2>
                </button>
                <Favdiv />
                <Favdiv />
            </div>
        )
    }
}

export default Favorites