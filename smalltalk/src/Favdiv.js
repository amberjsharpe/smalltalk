import React, { Component } from 'react';
import openheart from './images/openheart.png';
import redheart from './images/redheart.jpg';
import plus from './images/pluscircle.png';

class Favdiv extends Component {
    render(props) {
        console.log(this.props);
        return (
            <div className="backgroundTransparent pr-3 pl-3 mt-3">
                <p className="pt-2">test</p>
                <div>
                    <img className="openheartBtn mr-2" src={openheart} alt="open heart" />
                    <img className="plussignBtn" src={plus} alt="plus sign" />
                </div>
            </div>
        )
    }   
}

export default Favdiv