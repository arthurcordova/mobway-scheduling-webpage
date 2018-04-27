import {USER_STATUS, PHYSICIANS_STATUS} from './actionTypes';

export default function(state={}, action) {
    switch(action.type){
        case USER_STATUS:
            return {...state, user: action.payload};
        case PHYSICIANS_STATUS:
            return {...state, user: action.payload};
        default:
            return state;
    }
}