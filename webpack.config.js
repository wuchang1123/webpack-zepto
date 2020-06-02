const path     = require('path');

const src      = path.resolve(process.cwd(), 'src'); // 源码目录
const dist     = path.resolve(process.cwd(), 'dist');

module.exports = {
    mode: 'production',//development

    entry: {
        'webpack-zepto': './src/main.js'
    },

    module: {
        rules: [
            {
                test: /zepto(\.js|\.min\.js)$/,
                use: ['exports-loader?$=window.Zepto,Zepto=window.Zepto', 'script-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /dist/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                require.resolve('babel-preset-vue-app'),
                                {
                                    targets: { ie: 9, uglify: true }
                                }
                            ]
                        ]
                    }
                }
            },
        ]
    },

    output: {
        path: dist,
        filename: `[name].js`,
        libraryTarget: 'commonjs2'
    },
}
