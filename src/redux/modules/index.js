/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 09:00:10
 * @LastEditTime: 2019-08-19 09:25:44
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux';
import home from './home';
import app from './app';

// 合并reducer
const rootReducer = combineReducers({
	app,
	home
});

export default rootReducer;
