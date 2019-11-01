import { combineReducers } from 'redux';
import common from './modules/common';
import sessionReducer from '../components/Login/store';

// 合并reducer
const rootReducer = combineReducers({
    common,
    session: sessionReducer
});

export default rootReducer;
