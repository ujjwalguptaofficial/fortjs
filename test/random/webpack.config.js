const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: path.resolve(__dirname, './code/index.ts'),
    devtool: 'source-map',
    target: "node",
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'output/')
    },
    plugins: [],
    externals: [nodeExternals()]
};