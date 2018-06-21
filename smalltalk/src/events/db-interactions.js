import { rebase }  from '../base';

export function getFromFb(endpoint){
    return rebase.fetch(endpoint, {
        context: this,
        asArray: true, 
        then(data) {
            let myObj = JSON.stringify(data);
            return myObj;
        }
    })
}

export function SaveObjToFB ( endpoint, objToSave ) { 
    return rebase.push(endpoint, {
      data: objToSave, 
        then(err) {
          if(err) {
            console.log("error", err);
          } else if (!err) {

          }
        }
      })
      .then((result) => {
        return result;
      })
    }


export function DeleteFromFB (endpoint, fbID) {     
    const url = `${endpoint}/${fbID}`;

    return rebase.remove(url).then(res => { 
        return res; 
    });
}