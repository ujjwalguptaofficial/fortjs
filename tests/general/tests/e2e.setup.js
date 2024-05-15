const { createApp } = require("../dist/app.js");

module.exports = async function (globalConfig, projectConfig) {
    await createApp();
};