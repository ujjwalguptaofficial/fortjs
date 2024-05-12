const path = require('path');
const { webpack, BannerPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');
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
    plugins: [
        ...(
            process.env.NODE_ENV === "production" ? [
                new BannerPlugin({
                    banner: (() => {
                        const package = require("./package.json");
                        return `App version : ${package.version}, createdAt - ${new Date().toDateString()}`
                    })()
                })
            ] : []
        )
    ],
    externals: [nodeExternals()]
};