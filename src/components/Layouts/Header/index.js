import React, { Component } from 'react';
import { PageHeader, Row, Col, Icon, Menu, Dropdown, Avatar } from 'antd';
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
	constructor() {
		super();
		this.state = {
			collapsed: false
		};
	}

	toggleCollapsed = () => {
		this.setState(prevState => ({ collapsed: !prevState.collapsed }));
	};

	render() {
		return (
			<div className="header-wrapper">
				<PageHeader>
					<Row className="" align="middle" justify="center">
						<Col span={6} className="menu-fold-wrapper">
							<Icon
								type={
									this.state.collapsed
										? 'menu-unfold'
										: 'menu-fold'
								}
								onClick={this.toggleCollapsed}
								style={{ fontSize: '20px', cursor: 'pointer' }}
							/>
						</Col>
						<Col span={6} push={12}>
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

export default Header;
