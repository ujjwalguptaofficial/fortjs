const path = require('path');
const nodeExternals = require('webpack-node-externals');
const nodemonPlugin = require('nodemon-webpack-plugin')
module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app.js'),
        path.resolve(__dirname, 'src/views/index.js'),
    ],
    devtool: 'source-map',
    target: "node",
    mode: 'development',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    },
    module: {
        rules: [{
            test: /\.js|.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build/'),
        pathinfo: true
    },
    plugins: [new nodemonPlugin()],
    externals: [nodeExternals()]
};