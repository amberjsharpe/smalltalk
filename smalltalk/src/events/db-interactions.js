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