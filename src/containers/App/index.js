/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 07:26:55
 * @LastEditTime: 2019-08-19 11:01:53
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import './style.css';
import { Button, message } from 'antd';

class App extends Component {
	handleClick = () => {
		message.success('操作成功');
	};

	render() {
		return (
			<div className="App">
				111
				<Button onClick={this.handleClick} type="primary">
					test
				</Button>
			</div>
		);
	}
}

export default App;
