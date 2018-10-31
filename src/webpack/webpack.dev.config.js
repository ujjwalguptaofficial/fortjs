const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

const libraryTarget = [{
    type: "commonjs2",
    name: 'server.commonjs2.js'
}];

function getConfigForTaget(target) {
    return {
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, "./../output"),
            filename: target.name,
            library: 'Server',
            libraryTarget: target.type
        }
    }
}

function createConfigsForAllLibraryTarget() {
    var configs = [];
    libraryTarget.forEach(function (target) {
        configs.push(merge(baseConfig[0], getConfigForTaget(target)));
    })
    return configs;
}

module.exports = [...createConfigsForAllLibraryTarget()]