import React from 'react';
import { Route } from 'react-router-dom';

import StudentList from '../components/Student/list';

const Routes = () => {
	return [<Route path="/student" component={StudentList} />];
};

export default Routes;
