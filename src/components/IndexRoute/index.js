import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Layout } from 'antd';
// import http from '../../utils/http';
// import serverList from '../../services/serverList';
import HeaderDetail from '../Layouts/Header';
import MenuList from '../Layouts/MenuList';
import '../../mock/todolist';
import { changeCollapsedAction } from '../../redux/modules/actionCreator';
import ContentMain from './ContentMain';
import './style.css';

const { Header, Sider, Content } = Layout;

class IndexRoute extends Component {
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
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexRoute);
// export default Home;
