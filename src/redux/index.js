/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 09:00:10
 * @LastEditTime: 2019-08-19 09:25:44
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux';
import common from './modules/common';
import sessionReducer from '../components/Login/store';

// 合并reducer
const rootReducer = combineReducers({
	common,
	session: sessionReducer
});

export default rootReducer;
