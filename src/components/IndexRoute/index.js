import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Layout } from 'antd';
// import http from '../../utils/http';
// import serverList from '../../services/serverList';
import HeaderDetail from '../Layouts/Header';
import MenuList from '../Layouts/MenuList';
import '../../mock/todolist';
import {
	changeCollapsedAction,
	changeOpenKeys
} from '../../redux/modules/actionCreator';
import ContentMain from './ContentMain';
import './style.css';
import menuList from '../../router/menuList';

const { Header, Sider, Content } = Layout;

class IndexRoute extends Component {
	constructor() {
		super();
		this.onBreakpoint = this.onBreakpoint.bind(this);
	}

	onBreakpoint(broken) {
		if (broken) {
			this.props.changeOpenKeys([]);
		} else {
			const { pathname } = window.location;
			menuList.forEach((value, key) => {
				if (value.type === 'SubMenu') {
					value.childList.forEach(childValue => {
						if (childValue.url === pathname) {
							this.props.changeOpenKeys([value.title]);
						}
					});
				}
			});
		}
		this.props.changeCollapsed(!broken);
	}

	render() {
		return (
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
					<Header theme="light" className="no-padding">
						<HeaderDetail />
					</Header>
					<Content>
						<ContentMain />
					</Content>
				</Layout>
			</Layout>
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
		},
		changeOpenKeys: data => {
			dispatch(changeOpenKeys(data));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexRoute);
// export default Home;
