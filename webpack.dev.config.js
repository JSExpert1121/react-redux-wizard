
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './src/index.jsx'
    ],
    output: {
        publicPath: 'js/',
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader/webpack', 'babel-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

