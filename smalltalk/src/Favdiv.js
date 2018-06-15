import React, { Component } from 'react';
import { rebase }  from './base';
import openheart from './images/openheart.png';
import redheart from './images/redheart.jpg';
import plus from './images/pluscircle.png';

var user, question, FBFavObj, smallTalkId;

class Favdiv extends Component {


    SaveObjToFB ( endpoint, objToSave ) { 
    return rebase.push(endpoint, {
      data: objToSave, 
        then(err) {
          if(err) {
            console.log("error", err);
          } else if (!err) {
            console.log(objToSave);
          }
        }
      })
      .then((result) => {
        return result;
      })
    }

    favoriteSmallTalk(props) {

        user = this.props.user.uid;
        question = this.props.q;
        smallTalkId = this.props.id

        FBFavObj = {
           userUID: user,
           question: question,
           smallTalkId: smallTalkId

        } 
        
        this.SaveObjToFB('favorites/', FBFavObj)
        console.log("heart button clicked");
    } 

    render(props) {
        console.log(this.props.id)
        console.log(FBFavObj)
        return (
            <div className="backgroundTransparent pr-3 pl-3 mt-3">
                <p className="pt-2">{this.props.q}</p>
                <div>
                    <img onClick={this.favoriteSmallTalk()} className="openheartBtn mr-2" src={openheart} alt="open heart" />
                    <img className="plussignBtn" src={plus} alt="plus sign" />
                </div>
            </div>
        )
    }   
}

export default Favdiv