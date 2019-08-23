/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 09:00:10
 * @LastEditTime: 2019-08-19 09:25:44
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux';
import home from './modules/home';
import app from './modules/app';
import common from './modules/common';

// 合并reducer
const rootReducer = combineReducers({
	app,
	home,
	common
});

export default rootReducer;
