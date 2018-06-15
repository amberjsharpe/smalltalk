import React, { Component } from 'react';
import { rebase }  from '../base';
import Header from '../Header';
import Favdiv from '../Favdiv';
import party from '../images/party.png';
import './events.css';

class Party extends Component {
    constructor(props) {
        super(props);

        this.state = {
            party: []
        }
    }

    componentDidMount() {
        this.getFromFb('0').then(res => {
            this.setState({party: res[0]});
        })
    }

    getFromFb(endpoint){

        return rebase.fetch(endpoint, {
            context: this,
            asArray: true, 
            then(data) {
                let myObj = JSON.stringify(data);
                return myObj;
            }
        })
    }

    render(props) {
        return(
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                <div className="d-flex pl-3">
                    <div>
                        <img src={party} alt="party hat"/>
                    </div>
                    <div className="pt-3">
                        <h2>Party</h2>
                        <h6>SmallTalk</h6>
                    </div>
                    {this.state.party.map(p => {
                        return <div key={p.id}><Favdiv question={p.q} /></div>
                    })}
                </div>
            </div>
        )
    }
}

export default Party