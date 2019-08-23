import React, { Component } from 'react';
import MenuList from '../../components/MenuList';
import Header from '../../components/Header';
import Routes from '../../router';
import './style.css';

class App extends Component {
	toggleCollapsed = () => {
		// const collapsed = { this.state }
		// this.setState({
		// 	collapsed: !collapsed
		// });
	};

	render() {
		return (
			<div className="App">
				<MenuList />
				<div className="container-wrapper">
					<Header />
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
