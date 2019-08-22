/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 07:26:55
 * @LastEditTime: 2019-08-19 09:17:19
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import store from './redux/store';

console.log(process.env);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
