import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import train from '../images/train.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Commute extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commute: [],
            heart: false
        }
    }

    componentDidMount() {
        getFromFb('commute').then(res => {
            console.log(res)
            this.setState({commute: res});
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
                <div>
                    {this.state.commute.map((c) => {
                        return <Favdiv key={c.id} q={c.q} user={this.props.user} id={c.id} />
                    })}
                </div>
            </div>
        )
    }
}

export default Commute