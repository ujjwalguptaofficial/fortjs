let {
    request,
    expect,
    browserAccept,
    url,
    httpClient,
    forbiddenText,
    methodNotAllowedMsg,
    badRequestMsg,
    removeSpaceAndNewLine,
    createHtmlTextFile
} = require('./common');

const fs = require('fs').promises;
const path = require('path');


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
        const filePath = await createHtmlTextFile(10, 'temp_big_file.html');
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
