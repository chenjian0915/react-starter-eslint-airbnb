module.exports = {
	extends: ['react-app', 'airbnb', 'prettier'],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'prettier/prettier': 'error',
		'react/jsx-indent-props': 0, //验证JSX中的props缩进
		'no-const-assign': 2, //禁止修改const声明的变量
		'indent': ["error", 4], //空格4个
		'react/jsx-indent': 0,
		'react/jsx-one-expression-per-line': 'off', // 关闭要求一个表达式必须换行的要求，和Prettier冲突了
		// 'react/jsx-wrap-multilines': {
		// 	prop: 'ignore' // 关闭要求jsx属性中写jsx必须要加括号，和Prettier冲突了
		// },
		'react/self-closing-comp': 2,
		'react/no-is-mounted': 2,
		'no-var': 2,
		'react/destructuring-assignment': 0,
		'react/prefer-stateless-function': 0,
		'react/jsx-wrap-multilines': 0, // 关闭多行jsx需要加括号，react会给出错误提示
		'react/jsx-curly-newline': 0, // 关闭在JSX属性和表达式中强制或禁止大括号内的换行符
		'react/jsx-props-no-spreading': 1, // 将jsx props 传递提示类型设为警告
		'no-unused-vars': 1,
		'linebreak-style': 0, //关闭当行尾检测
	},
	plugins: ['prettier']
};
