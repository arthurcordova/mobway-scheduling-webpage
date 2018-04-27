import {GET_PHYSICIANS, PHYSICIANS_STATUS} from '../reducers/actionTypes';
import {database} from '../../../firebase';

export function getPhysicians() {
    return dispatch => {        
        //as soon as this function fires show loading to true
        dispatch({
                type: PHYSICIANS_STATUS,
                payload : true
        });
        database.ref('physicians').on('value', snapshot => {   
            console.log("MANUCA");         
            dispatch({
                type: GET_PHYSICIANS,
                payload: snapshot.val()                
            });            
            dispatch({
                type: PHYSICIANS_STATUS,
                payload : false
            });
            //wait until something changes and try again
        }, () => {
            dispatch({
                type: PHYSICIANS_STATUS,
                payload: -1
            })
        });
    };    
}

export function savePhysicians(physicians) {
    return dispatch => database.ref('physicians').push(physicians);
}

export function editPhysicians(id, physicians) {
    return dispatch => database.ref('physicians').child(id).update(physicians);
}

export function deletePhysicians(id) {
    return dispatch => database.ref('physicians').child(id).remove();
}