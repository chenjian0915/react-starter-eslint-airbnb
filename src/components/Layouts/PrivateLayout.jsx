import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SessionService from '../../services/session.service';
import './PrivateLayout.css';

const PrivateLayout = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			SessionService.isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

export default PrivateLayout;
