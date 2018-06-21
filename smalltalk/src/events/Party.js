import React, { Component } from 'react';
import { rebase }  from '../base';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import party from '../images/party.png';
import './events.css';
import { getFromFb } from './db-interactions';

class Party extends Component {
    constructor(props) {
        super(props);
        this.state = {
            party: [],
            heart: false
        }
    }
    componentDidMount() {
        getFromFb('party').then(res => {
            res.forEach(obj => {
                obj.heart = false;
            })
            this.setState({party: res});
        })
    }
    
    render() {
        return(
            <div className="d-flex flex-column">
                <Eventheader user={this.props.user} logout={this.props.logout}/>
                <div>
                    <div className="d-flex pl-3">
                        <div>
                            <img src={party} alt="party hat"/>
                        </div>
                        <div className="pt-3">
                            <h2>Party</h2>
                            <h6>SmallTalk</h6>
                        </div>
                </div>    
                    <div>
                        {this.state.party.map((p, i ) => {
                            return <Favdiv heart={this.state.party[i].heart} key={p.id} q={p.q} user={this.props.user} id={p.id} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Party