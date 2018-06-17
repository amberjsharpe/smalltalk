import React, { Component } from 'react';
import { rebase }  from '../base';
import Eventheader from '../Eventheader';
import Favdiv from '../Favdiv';
import party from '../images/party.png';
import './events.css';
class Party extends Component {
    constructor(props) {
        super(props);
        // STEP9: changing fullheart state prop to heart
        this.state = {
            party: [],
            heart: false
        }
    }
    componentDidMount() {
        this.getFromFb('party').then(res => {
            // STEP16: **TEST** logging return from FB. (commenting log)
            // console.log("IN COMPONENTDIDMOUNT FOR FB RETURNED OBJECT", res);
            // STEP17: **TEST** adding heart property to returned objects
            res.forEach(obj => {
                obj.heart = false;
            })
            // STEP18: logging array to make certain objects have changed (commenting log)
            // console.log("IN COMPONENTDIDMOUNT AFTER ADDING NEW PROPERTIES", res)
            this.setState({party: res});
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
    // STEP13: writing toggleHeart to change the state of the one item needed to show the full heart. This function takes the id from the object that is being created to ssend to FB as a favorite.
    toggleHeart = (id) => {
        // STEP15: setting empty array to hold updated party state
        let newParty = [];
        this.state.party.forEach((q, i) => {
            // STEP14: logging the incoming id, item id and index to make sure everything I need is there (commenting log)
            // console.log("IN THE TOGGLEHEART FOR ID & Q", id, q.id, i)
            // STEP16: Set up conditional to change only the object's heart property that's been clicked and push them into the new array
            if(q.id === id){
                // STEP17: logging the item I want the state to change for. This is the problem!!! The objects that are coming down from firebase have no heart properties. I think if you add them and set heart to false, then you will have something in state you can change. (commenting log)
                // console.log("IN THE IF (IDS MATCH) FOR THIS.STATE.PARTY[I]", !this.state.party[i])
                q.heart = !this.state.party[i].heart;
                newParty.push(q);
            } else {
                newParty.push(q);
            }
            // STEP18: logging newParty array
            console.log("IN THE TOGGLEHEART AFTER NEWPARTY ARRAY DEFINED", newParty)
            // STEP19: setting the new state and calling to check it. If it works you should see the full heart.
            this.setState({party: newParty}, this.checkState)
        })
    }
    // STEP20: adding function to check state
    checkState = () => {
        console.log(this.state)
    }
    // clean up props parameter
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
 // **START HERE** //       // STEP0: removing surrounding div to get rid of keys error                                 (GOTO FavDiv.js)
                            // STEP10: changing fullheart prop to heart 
                            // STEP11: After looking at this next line for a while I     figured out why they were all changing to full hearts. When you changed the state for the propery heart it propagated to every instance. Instead I thought about adding the property to the object itself and changing the state that way, so only the one that has changed will receive the ful heart. (GOTO: FavDiv.js)
                            return <Favdiv heart={this.state.party[i].heart} toggleHeart={this.toggleHeart} key={p.id} q={p.q} user={this.props.user} id={p.id} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Party