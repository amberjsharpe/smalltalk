import React, { Component } from 'react';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import network from '../images/network.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Network extends Component {

    constructor(props) {
        super(props);

        this.state = {
            network: [],
            heart: false
        }
    }

    componentDidMount() {
        getFromFb('networking').then(res => {
            console.log(res)
            this.setState({network: res});
        })
    }

    checkState = () => {
        console.log(this.state)
    }

    render(props) {
        return(
            <div>
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={network} alt="network"/>
                    </div>
                    <div className="pt-3">
                        <h3>Networking Event</h3>
                        <h6>SmallTalk</h6>
                    </div>
                </div>
                <div>
                    {this.state.network.map((n, i) => {
                        return <Favdiv key={n.id} q={n.q} user={this.props.user} id={n.id} />
                    })}
                </div>
            </div>
        )
    }
}

export default Network