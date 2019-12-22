let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = 'http://localhost:4000';
exports.url = url;
exports.removeSpaceAndNewLine = function (value) {
    return value.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/\s+/g, '')
}
// exports.httpClient = require('request');
exports.request = chai.request.agent(url);
exports.methodNotAllowedMsg = "<h1>Method Not allowed.</h1>";
exports.badRequestMsg = '<h1>Bad Request</h1>';
exports.forbiddenText = "<h1>We are sorry, but you are not allowed access to this resource.</h1>";
exports.expect = chai.expect;
exports.browserAccept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
exports.isProduction = process.env.NODE_ENV === "production"
exports.isDevelopment = process.env.NODE_ENV === "development"
