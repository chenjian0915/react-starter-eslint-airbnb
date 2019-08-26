import React, { Component } from 'react';
// import MenuList from '../../components/Layouts/MenuList';
// import Header from '../../components/Layouts/Header';
import Routes from '../../router';
import './style.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		);
	}

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<MenuList />
	// 			<div className="container-wrapper">
	// 				<Header />
	// 				<Routes />
	// 			</div>
	// 		</div>
	// 	);
	// }
}

export default App;
