let {
    request,
    expect,
    browserAccept,
    url,
    httpClient,
    forbiddenText,
    methodNotAllowedMsg,
    badRequestMsg,
    removeSpaceAndNewLine
} = require('./common');

const fs = require('fs').promises;
const path = require('path');

function createHtmlTextFile(sizeInMB) {
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
    const filePath = path.join(process.cwd(), 'static', 'ignorefile.big_html_file.html');
    return fs.writeFile(
        filePath,
        content
    ).then(_ => {
        return filePath;
    })
}

describe("/static", () => {

    it('default path', (done) => {
        request.get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });
    })

    it("/index.html", done => {
        request.get('/index.html').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });
    })

    it("/static/", done => {
        request.get('/static/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });
    })

    let etagVal;

    it('big file test', async () => {
        const filePath = await createHtmlTextFile(10);
        const fileName = path.basename(filePath);
        let res = await request.get(`/static/${fileName}`).accept(browserAccept);
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'text/html');
        expect(res.header['x-powered-by']).to.equal('MyFort');
        expect(res).to.have.header('Etag');
        expect(res).to.have.header('last-modified');
        etagVal = res.headers['etag'];
        expect(res.text).to.include('</html>');

        // check after etag
        res = await request.get(`/static/${fileName}`).accept(browserAccept).set('if-none-match', etagVal);
        expect(res).to.have.status(304);
        expect(res).to.have.header('content-type', undefined);
        expect(res).to.have.header('Etag');
        expect(res.header['x-powered-by']).to.equal('MyFort');

        // delete file

        await fs.unlink(filePath);
    })
});
