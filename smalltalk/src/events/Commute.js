import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import train from '../images/train.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Commute extends Component {

    componentDidMount() {
        getFromFb('commute').then(res => {
            console.log(res)
        })
    }

    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={train} alt="train"/>
                    </div>
                    <div className="pt-3">
                        <h2>Commute</h2>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Commute