import React from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
// Home
import Home from '../Home';
// 资源管理
import BooksManagement from '../ResourceManagement/Books';
import VersionManagement from '../ResourceManagement/Version';
import WordsManagement from '../ResourceManagement/Words';

// 机构管理
import ClassManagement from '../OrganizationManagement/Class';
import OrganizationManagement from '../OrganizationManagement/Organization';

// 系统管理
import AdminManagement from '../SystemManagement/Admin';
import AppVersionManagement from '../SystemManagement/AppVersion';
import AreasManagement from '../SystemManagement/Areas';
import LogManagement from '../SystemManagement/Log';
import ModifyPassword from '../SystemManagement/ModifyPassword';
import PermissionManagement from '../SystemManagement/Permission';

import StudentsManagement from '../UsersManagement/Students';
import TeachersManagement from '../UsersManagement/Teachers';

import AgentManagement from '../AgentManagement/Agent';

import PrivateLayout from '../Layouts/PrivateLayout';

class ContentMain extends React.Component {
	render() {
		return (
			<div style={{ padding: 16, position: 'relative' }}>
				<Switch>
					<PrivateLayout exact path="/" component={Home} />
					<PrivateLayout
						exact
						path="/books"
						component={BooksManagement}
					/>
					<PrivateLayout
						exact
						path="/words"
						component={WordsManagement}
					/>
					<PrivateLayout
						exact
						path="/version"
						component={VersionManagement}
					/>
					<PrivateLayout
						exact
						path="/class"
						component={ClassManagement}
					/>
					<PrivateLayout
						exact
						path="/organization"
						component={OrganizationManagement}
					/>
					<PrivateLayout
						exact
						path="/students"
						component={StudentsManagement}
					/>
					<PrivateLayout
						exact
						path="/teachers"
						component={TeachersManagement}
					/>
					<PrivateLayout
						exact
						path="/admin"
						component={AdminManagement}
					/>
					<PrivateLayout
						exact
						path="/app-version"
						component={AppVersionManagement}
					/>
					<PrivateLayout
						exact
						path="/areas"
						component={AreasManagement}
					/>
					<PrivateLayout
						exact
						path="/log"
						component={LogManagement}
					/>
					<PrivateLayout
						exact
						path="/modify-password"
						component={ModifyPassword}
					/>
					<PrivateLayout
						exact
						path="/permission"
						component={PermissionManagement}
					/>
					<PrivateLayout
						exact
						path="/agent"
						component={AgentManagement}
					/>
				</Switch>
			</div>
		);
	}
}
export default withRouter(ContentMain);
