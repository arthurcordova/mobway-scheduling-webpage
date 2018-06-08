import {auth, googleProvider, twitterProvider} from '../../../firebase';
import {GET_USER, USER_STATUS} from '../reducers/actionTypes';

export function getUser() {    
    return dispatch => {   
        var varAuth = auth;     
        //Show loading status before getting user to true
        dispatch({
            type: USER_STATUS,
            payload : true
        });
        varAuth.onAuthStateChanged(user => {
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
    var varAuth = auth;
    var varGoogleProvider = googleProvider;    
    return dispatch =>  varAuth.signInWithPopup(varGoogleProvider);
}

export function twitterLogin() {
    return dispatch => auth.signInWithPopup(twitterProvider);
}

export function logout() {
    var varAuth = auth;
    return dispatch => varAuth.signOut();
}