import React, { Component } from 'react';
import { rebase }  from './base';
import Openheart from './Openheart';
import Fullheart from './Fullheart';
import plus from './images/pluscircle.png';
import { SaveObjToFB } from './events/db-interactions';

var user, question, FBFavObj, smallTalkId, heart;
class Favdiv extends Component {

    favoriteSmallTalk() {

        user = this.props.user.uid;
        question = this.props.q;
        smallTalkId = this.props.id;

        heart = !this.props.heart;
        FBFavObj = {
           userUID: user,
           question: question,
           heart: heart
        } 

        this.props.toggleHeart(smallTalkId);
        SaveObjToFB('favorites', FBFavObj)
    } 
    
    render() {

        if(this.props.heart){
          heart = <Fullheart favoriteSmallTalk={this.favoriteSmallTalk} SaveObjToFB={this.SaveObjToFB} props={this.props} />
        } else {
          heart = <Openheart favoriteSmallTalk={this.favoriteSmallTalk} SaveObjToFB={this.SaveObjToFB} props={this.props} />
        }
        return (
            <div className="backgroundTransparent pr-3 pb-2 pl-3 mt-3">
                <p className="pt-2">{this.props.q}</p>
                <div className="d-flex justify-content-between">
                    <div>{heart}</div>
                    <img className="plussignBtn" src={plus} alt="plus sign" />
                </div>
            </div>
        )
    }   
}
export default Favdiv