import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
			<PublicLayout path="/login" component={Login} />,
			<PublicLayout path="/unauthorized" component={Unauthorized} />,
			<PublicLayout path="/login-expired" component={LoginExpired} />
			<PrivateLayout path="/" component={IndexRoute} />,
		</Switch>
	);
};
export default Routes;
