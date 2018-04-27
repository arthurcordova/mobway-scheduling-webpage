import {combineReducers} from 'redux';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';
import physicianReducer from './physicianReducer';

const rootReducer = combineReducers({    
    user: userReducer,
    loading: loadingReducer,    
    physicians: physicianReducer
});

export default rootReducer;