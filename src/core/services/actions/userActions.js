import {auth, googleProvider} from '../../../firebase';
import {GET_USER, USER_STATUS} from '../reducers/actionTypes';

export function getUser() {    
    return dispatch => {                
        //Show loading status before getting user to true
        dispatch({
            type: USER_STATUS,
            payload : true
        });
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload: user
            });
            //Show loading status to false
            dispatch({
                type: USER_STATUS,
                payload : false
            });
        });
    };
}

export function googleLogin() {        
    return dispatch =>  auth.signInWithPopup(googleProvider);
}

export function emailLogin(email, password) {
    console.log(email, password);
    return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function logout() {    
    return dispatch => auth.signOut();
}