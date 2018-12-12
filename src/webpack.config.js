const path = require('path');
const nodeExternals = require('webpack-node-externals');
const SmartBannerPlugin = require('smart-banner-webpack-plugin');
const banner = require('./license');

module.exports = [{
    name: "fort",
    target: "node",
    entry: "./src/code/index.ts",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "./../dist"),
        filename: "fort.js",
        library: 'FortJs',
        libraryTarget: "commonjs2"
    },
    node: {
        __dirname: false
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    mode: 'none',
    resolve: {
        extensions: ['.ts'] // '' is needed to find modules like "jquery"
    },
    plugins: [
        new SmartBannerPlugin(banner)
    ],
    externals: [nodeExternals()]
}];