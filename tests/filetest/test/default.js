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
    isProduction
} = require('./common');

describe("/default", () => {

    it('default path', (done) => {
        request.get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });


    })

    it("/default", done => {
        request.get('/default').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });
    })

    it("/assets/", done => {
        request.get('/assets/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            if (isProduction) {
                expect(res).to.have.header('Etag');
            }
            else {
                expect(res).to.not.have.header('Etag');
            }
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });
    })

    it("/file/getCookie", done => {
        request.get('/file/getCookie').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    })

});