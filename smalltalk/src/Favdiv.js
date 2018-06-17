import React, { Component } from 'react';
import { rebase }  from './base';
import Openheart from './Openheart';
import Fullheart from './Fullheart';
import plus from './images/pluscircle.png';
// clean up fullheart declaration
var user, question, FBFavObj, smallTalkId, heart;
class Favdiv extends Component {
    SaveObjToFB ( endpoint, objToSave ) { 
      // STEP1: logging endpoint and objToSave (commenting log)
      // console.log("IN THE SAVEOBJTOFB TO BEGIN TRACKING BUG", endpoint, objToSave)
    return rebase.push(endpoint, {
      data: objToSave, 
        then(err) {
          if(err) {
            console.log("error", err);
          } else if (!err) {
            // clean up log
            // console.log(objToSave);
          }
        }
      })
      .then((result) => {
        return result;
      })
    }
    // clean up props in parameter
    favoriteSmallTalk() {
      // STEP2: logging this.props.fullheart
      // console.log("IN THE FAVORITESMALLTALK FOR FULLHEART", this.props.fullheart)
      // (this.props.fullheart is undefined here) (commenting out)
      // STEP3: logging this.props (commenting log)
      // console.log("IN THE FAVORITESMALLTALK FOR PROPS", this.props)
      // (fullheart property does not exist here. heart = false)
        user = this.props.user.uid;
        question = this.props.q;
        smallTalkId = this.props.id;
        // STEP4: Changing fullheart to heart in props and FBFavObj
        heart = !this.props.heart;
        FBFavObj = {
           userUID: user,
           question: question,
           smallTalkId: smallTalkId,
           heart: heart
        } 
        // STEP12: Here you were only changing the object that as being pushed to FB, so the parent was not receiving state change. By calling the toggleHeart function that lives in the Party component now you can change that state. (GOTO Party.js)
        this.props.toggleHeart(smallTalkId);
        this.SaveObjToFB('favorites', FBFavObj)
    } 
    
    // STEP6: removing props from paramters & commenting out STEP5 console.log
    render() {
        // clean up let heart declaration
        // console.log("STEP5: IN RENDER BEORE RETURN FOR PROPS", props)
        // (props is undefined here)
        // STEP7: logging this.props (commenting log)
        // console.log("IN THE RENDER BEFORE RETURN FOR THIS.PROPS", this.props)
        // (this.props exists, all heart properties are false)
        // STEP8: implementing conditional to set heart to either full or open (GOTO: Party.js)
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