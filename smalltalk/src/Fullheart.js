import React, { Component } from 'react';
import redheart from './images/redheart.png';

class Fullheart extends Component {
    render() {
        return(
            <div>
                <img className="fullheartBtn" src={redheart} alt="redheart" />
            </div>
        )
    }
}

export default Fullheart