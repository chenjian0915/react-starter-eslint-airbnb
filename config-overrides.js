const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    // 配置 antd 按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // 配置less
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1DA57A'
        }
    })
);
