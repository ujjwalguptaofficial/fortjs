const path = require('path');
const nodeExternals = require('webpack-node-externals');
const nodemonPlugin = require('nodemon-webpack-plugin');

const rootFolder = path.join(__dirname);

module.exports = {
    entry: [
        path.resolve(rootFolder, 'src/index.ts')
    ],
    devtool: 'source-map',
    target: "node",
    mode: process.env.NODE_ENV || 'development',
    optimization: {
        // We no not want to minimize our code.
        minimize: false,
        // do not set NODE_ENV
        nodeEnv: false
    },
    node: {
        global: false,
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
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "~": rootFolder,
            "@": path.join(rootFolder, 'src')
        },
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, process.env.BUILD_FOLDER || 'dist'),
        pathinfo: true,
        library: undefined,
        libraryTarget: "commonjs2"
    },
    plugins: [new nodemonPlugin()],
    externals: [nodeExternals()]
};