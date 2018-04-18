import {GET_SCHEDULINGS} from '../actionTypes';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_SCHEDULINGS:
            return action.payload;
        default :
            return state;
    }
}