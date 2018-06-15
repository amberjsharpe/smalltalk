import React, { Component } from 'react';
import openheart from './images/openheart.png';

class Openheart extends Component {
    render(props) {
        return(
            <div>
                <img onClick={() => {this.props.favoriteSmallTalk()}} src={openheart} alt="open-heart" className="openheartBtn" />
            </div>
        )
    }
}

export default Openheart