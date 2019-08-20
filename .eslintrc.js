module.exports = {
    extends: ['react-app', 'airbnb', 'plugin:prettier/recommended'],
    rules: {
        "react/jsx-filename-extension": 0,
        "no-console": 'error',
        "indent": ["error", "tab"], //空格4个
    },
    // overrides: [
    //   {
    //     files: ['**/Mi/*.js', '**/Mi/*.jsx'],
    //     rules: {
    //       'react/prop-types': 'error', // Mi 文件夹下的是系统组件，必须写prop-types
    //     },
    //   },
    // ],
};
// 'eslint:recommended'
