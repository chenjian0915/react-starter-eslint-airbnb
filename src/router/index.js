import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateLayout from '../components/Layouts/PrivateLayout';
import PublicLayout from '../components/Layouts/PublicLayout';

import IndexRoute from '../components/IndexRoute';

import Login from '../components/Login/Login';
import Unauthorized from '../components/Pages/Unauthorized';
import LoginExpired from '../components/Pages/LoginExpired';
// import NotFound from '../components/Pages/NotFound';

const Routes = () => {
	return (
		<Switch>
			<PrivateLayout path="/" component={IndexRoute} />,
			<PublicLayout path="/login" component={Login} exact />,
			<PublicLayout path="/unauthorized" component={Unauthorized} exact />,
			<PublicLayout
				path="/login-expired"
				component={LoginExpired}
				exact
			/>
		</Switch>
	);
};
export default Routes;
