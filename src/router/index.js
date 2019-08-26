import React from 'react';

import Home from '../components/Home';
import StudentList from '../components/Student/list';
import PrivateLayout from '../components/Layouts/PrivateLayout';
import PublicLayout from '../components/Layouts/PublicLayout';

import Login from '../components/Login/Login';
import Unauthorized from '../components/Pages/Unauthorized';
import LoginExpired from '../components/Pages/LoginExpired';
// import NotFound from '../components/Pages/NotFound';

const Routes = () => {
	return [
		<PrivateLayout path="/" component={Home} exact />,
		<PrivateLayout path="/student" component={StudentList} exact />,
		<PublicLayout path="/login" component={Login} exact />,
		<PublicLayout path="/unauthorized" component={Unauthorized} exact />,
		<PublicLayout path="/login-expired" component={LoginExpired} exact />
	];
};

export default Routes;
