/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 10:43:13
 * @LastEditTime: 2019-08-21 08:40:38
 * @LastEditors: Please set LastEditors
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
    javascriptEnabled: true, // enable inline JavaScript in Less
  })(config, env);

  config.output.publicPath = process.env.REACT_APP_BASENAME ? process.env.REACT_APP_BASENAME : '';

  return config;
}
