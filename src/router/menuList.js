const menuList = [
	{
		type: 'Item',
		Icon: 'google',
		title: '主页',
		url: '/'
	},
	{
		type: 'SubMenu',
		Icon: 'google',
		title: '资源管理',
		childList: [
			{
				type: 'Item',
				Icon: '',
				title: '单词池',
				url: '/words'
			},
			{
				type: 'Item',
				Icon: '',
				title: '词书管理',
				url: '/books'
			},
			{
				type: 'Item',
				Icon: '',
				title: '版本管理',
				url: '/version'
			}
		]
	},
	{
		type: 'SubMenu',
		Icon: 'google',
		title: '用户管理',
		childList: [
			{
				type: 'Item',
				Icon: '',
				title: '学生管理',
				url: '/students'
			},
			{
				type: 'Item',
				Icon: '',
				title: '教师管理',
				url: '/teachers'
			}
		]
	},
	{
		type: 'SubMenu',
		Icon: 'google',
		title: '机构管理',
		childList: [
			{
				type: 'Item',
				Icon: '',
				title: '机构管理',
				url: '/organization'
			},
			{
				type: 'Item',
				Icon: '',
				title: '班级管理',
				url: '/class'
			}
		]
	},
	{
		type: 'SubMenu',
		Icon: 'google',
		title: '代理管理',
		childList: [
			{
				type: 'Item',
				Icon: '',
				title: '代理商管理',
				url: '/agent'
			}
		]
	},
	{
		type: 'SubMenu',
		Icon: 'google',
		title: '系统管理',
		childList: [
			{
				type: 'Item',
				Icon: '',
				title: '管理员管理',
				url: '/admin'
			},
			{
				type: 'Item',
				Icon: '',
				title: '权限管理',
				url: '/permission'
			},
			{
				type: 'Item',
				Icon: '',
				title: '地区管理',
				url: '/areas'
			},
			{
				type: 'Item',
				Icon: '',
				title: '日志管理',
				url: '/log'
			},
			{
				type: 'Item',
				Icon: '',
				title: 'APP版本管理',
				url: '/app-version'
			},
			{
				type: 'Item',
				Icon: '',
				title: '修改密码',
				url: '/modify-password'
			}
		]
	}
];

export default menuList;
