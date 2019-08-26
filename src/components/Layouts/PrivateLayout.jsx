import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Layout } from 'antd';
import HeaderDetail from './Header';
import MenuList from './MenuList';

import './PrivateLayout.css';

import SessionService from '../../services/session.service';

const { Header, Sider, Content } = Layout;

export default class PrivateLayout extends React.Component {
	render() {
		const { component: Component } = this.props;

		return (
			<Route
				render={props =>
					SessionService.isAuthenticated() ? (
						<Layout>
							<Sider
								style={{
									height: '100vh'
								}}
								width="256"
							>
								<MenuList />
							</Sider>
							<Layout>
								<Header className="no-padding">
									<HeaderDetail />
								</Header>
								<Content>
									{/* eslint-disable-next-line react/jsx-props-no-spreading */}
									<Component {...props} />
								</Content>
							</Layout>
						</Layout>
					) : (
						<Redirect from={props.location} to="/login" />
					)
				}
			/>
		);
	}
}
