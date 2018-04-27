import {GET_PHYSICIANS} from './actionTypes';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_PHYSICIANS:
            return action.payload;
        default :
            return state;
    }
}