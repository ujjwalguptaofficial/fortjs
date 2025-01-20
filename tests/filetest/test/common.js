let chai = require('chai');
let chaiHttp = require('chai-http');
const fs = require('fs').promises;
const path = require('path');
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
exports.createHtmlTextFile = (sizeInMB, fileName = 'big_html_file.html') => {
    // Calculate the number of characters needed to reach approximately the desired size
    const sizeInBytes = sizeInMB * 1024 * 1024; // Convert MB to bytes
    let content = '<html>\n'; // Start with the opening HTML tag

    // Fill content with random text or a repeating pattern
    while (content.length < sizeInBytes - 7) { // Subtract 7 for the length of '</html>' to avoid exceeding the size
        content += 'A'; // You can replace 'A' with any text you prefer
    }

    // Add the closing HTML tag
    content += '\n</html>';

    // Slice the content to the exact desired size (in case the length slightly exceeds the size)
    // content = content.slice(0, sizeInBytes);

    // Write content to a file
    const filePath = path.join(process.cwd(), 'static', 'ignorefile.' + fileName);
    return fs.writeFile(
        filePath,
        content
    ).then(_ => {
        return filePath;
    })
}
