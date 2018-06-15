import React, { Component } from 'react';
import { rebase }  from './base';
import openheart from './images/openheart.png';
import redheart from './images/redheart.jpg';
import plus from './images/pluscircle.png';

var user, question, FBFavObj, key;

class Favdiv extends Component {


    SaveObjToFB ( endpoint, objToSave ) { 
    return rebase.push(endpoint, {
      data: objToSave, 
        then(err) {
          if(err) {
            console.log("error", err);
          } else if (!err) {
            console.log("error free, baby!");
            console.log(objToSave);
          }
        }
      })
      .then((result) => {
        console.log("saved something to firebase and this was the result:", result);
        return result;
      })
    }

    favoriteSmallTalk(props) {

        user = this.props.user.uid;
        question = this.props.q;

        FBFavObj = {
           userUID: user,
           question: question
        } 
        
        this.SaveObjToFB('favorites', FBFavObj)
    } 

    render(props) {
        console.log(this.props)
        console.log(FBFavObj)
        return (
            <div className="backgroundTransparent pr-3 pl-3 mt-3">
                <p className="pt-2">{this.props.q}</p>
                <div>
                    <img onClick={this.favoriteSmallTalk(this.props)} id={this.props.key} className="openheartBtn mr-2" src={openheart} alt="open heart" />
                    <img className="plussignBtn" src={plus} alt="plus sign" />
                </div>
            </div>
        )
    }   
}

export default Favdiv