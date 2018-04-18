import {combineReducers} from 'redux';
import notesReducer from './notesReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
import schedulingsReducer from './schedulingsReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer,
    loading: loadingReducer,
    schedulings: schedulingsReducer
});

export default rootReducer;