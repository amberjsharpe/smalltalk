import React, { Component } from 'react';
import { rebase }  from './base';
import Openheart from './Openheart';
import Fullheart from './Fullheart';
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
        
        
    } 

    render(props) {

        return (
            <div className="backgroundTransparent pr-3 pl-3 mt-3">
                <p className="pt-2">{this.props.q}</p>
                <div className="d-flex">
                <Openheart favoriteSmallTalk={this.favoriteSmallTalk} SaveObjToFB={this.SaveObjToFB} props={this.props} />
                    <img className="plussignBtn" src={plus} alt="plus sign" />
                </div>
            </div>
        )
    }   
}

export default Favdiv