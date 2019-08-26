module.exports = {
	extends: ['react-app', 'airbnb', 'prettier'],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/prop-types': 0,
		'prettier/prettier': 'error',
		'react/jsx-indent-props': 0, //验证JSX中的props缩进
		'no-const-assign': 2, //禁止修改const声明的变量
		indent: ['error', 'tab', { "SwitchCase": 1 }], //空格4个
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
		'react/jsx-wrap-multilines': 0,
		'react/jsx-curly-newline': 0
	},
	plugins: ['prettier']
};
