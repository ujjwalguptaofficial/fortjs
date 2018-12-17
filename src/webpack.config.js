const path = require('path');
const nodeExternals = require('webpack-node-externals');
const SmartBannerPlugin = require('smart-banner-webpack-plugin');
const banner = require('./license');

module.exports = [{
    name: "fort",
    target: "node",
    entry: "./src/index.ts",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "./../dist"),
        filename: "fort.js",
        library: 'FortJs',
        libraryTarget: "commonjs2"
    },
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
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts'] // '' is needed to find modules like "jquery"
    },
    plugins: [
        new SmartBannerPlugin(banner)
    ],
    externals: [nodeExternals()]
}];