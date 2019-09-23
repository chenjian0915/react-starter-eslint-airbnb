import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Row, Col, Icon, Menu, Dropdown, Avatar } from 'antd';
import {
	changeCollapsedAction,
	changeOpenKeys
} from '../../../redux/modules/actionCreator';
import menuList from '../../../router/menuList';
import './header.css';

const menu = (
	<Menu>
		<Menu.Item>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://www.alipay.com/"
			>
				<Icon type="user" />
				&nbsp;个人中心
			</a>
		</Menu.Item>
		<Menu.Item>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://www.taobao.com/"
			>
				<Icon type="logout" />
				&nbsp;个人设置
			</a>
		</Menu.Item>
		<Menu.Item>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="http://www.tmall.com/"
			>
				<Icon type="user" />
				&nbsp;退出登录
			</a>
		</Menu.Item>
	</Menu>
);

class Header extends Component {
	constructor(props) {
		super(props);
		this.changeCollapsed = this.changeCollapsed.bind(this);
	}

	changeCollapsed() {
		if (!this.props.collapsed) {
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
		this.props.changeCollapsed(this.props.collapsed);
	}

	render() {
		return (
			<div className="header-wrapper">
				<PageHeader>
					<Row className="" align="middle" justify="center">
						<Col span={12} className="menu-fold-wrapper">
							<Icon
								type={
									this.props.collapsed
										? 'menu-unfold'
										: 'menu-fold'
								}
								onClick={this.changeCollapsed}
								style={{ fontSize: '20px', cursor: 'pointer' }}
							/>
						</Col>
						<Col span={12}>
							<Dropdown
								className="user-info-dropdown"
								overlay={menu}
								placement="bottomCenter"
							>
								<span>
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
									James Harden
								</span>
							</Dropdown>
						</Col>
					</Row>
				</PageHeader>
			</div>
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
)(Header);
