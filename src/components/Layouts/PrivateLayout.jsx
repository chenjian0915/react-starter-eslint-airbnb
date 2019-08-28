import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import HeaderDetail from './Header';
import MenuList from './MenuList';

import './PrivateLayout.css';

import SessionService from '../../services/session.service';
import { changeCollapsedAction } from '../../redux/modules/actionCreator';

const { Header, Sider, Content } = Layout;

class PrivateLayout extends React.Component {
	// eslint-disable-next-line constructor-super
	constructor() {
		super();
		this.onBreakpoint = this.onBreakpoint.bind(this);
	}

	onBreakpoint(broken) {
		this.props.changeCollapsed(!broken);
	}

	render() {
		const { component: Component, ...rest } = this.props;

		return (
			<Route
				{...rest}
				render={props =>
					SessionService.isAuthenticated() ? (
						<Layout>
							<Sider
								collapsible
								collapsed={this.props.collapsed}
								style={{
									height: '100vh'
								}}
								breakpoint="lg"
								onBreakpoint={this.onBreakpoint}
								width={256}
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

const mapStateToProps = state => {
	return {
		collapsed: state.common.collapsed
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeCollapsed: status => {
			dispatch(changeCollapsedAction(!status));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PrivateLayout);
