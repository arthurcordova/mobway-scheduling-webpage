import {GET_SCHEDULINGS, SCHEDULINGS_STATUS} from '../actionTypes';
import {database} from '../firebase';

export function getSchedulings() {
    return dispatch => {        
        //as soon as this function fires show loading to true
        dispatch({
                type: SCHEDULINGS_STATUS,
                payload : true
        });
        database.ref('scheduling').on('value', snapshot => {            
            dispatch({
                type: GET_SCHEDULINGS,
                payload: snapshot.val()
            });
            //once schedulings are receiver show loading to false
            dispatch({
                type: SCHEDULINGS_STATUS,
                payload : false
            });
            //wait until something changes and try again
        }, () => {
            dispatch({
                type: SCHEDULINGS_STATUS,
                payload: -1
            })
        });
    };    
}

export function saveScheduling(scheduling) {
    return dispatch => database.ref('scheduling').push(scheduling);
}

export function editScheduling(id, scheduling) {
    return dispatch => database.ref('scheduling').child(id).update(scheduling);
}

export function deleteScheduling(id) {
    return dispatch => database.ref('scheduling').child(id).remove();
}