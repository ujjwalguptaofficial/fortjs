const { Fort } = require("fortjs");

module.exports = async function (globalConfig, projectConfig) {

    await Fort.destroy();
    await new Promise((res) => {
        setTimeout(res, 1000);
    });
};