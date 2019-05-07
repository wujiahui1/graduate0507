const { override, fixBabelImports} = require('customize-cra');
const path = require('path');
module.exports = {
    webpack: function(config, env) {
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        })
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers')
        };
        return config;
    }
};