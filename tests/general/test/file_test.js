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

describe("/file test", () => {

    it('/contents/ => with slace ', (done) => {
        request.get('/contents/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    });

    it('/contents => without slace', (done) => {
        request.get('/contents').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    });

    it('/contents/index.html', (done) => {
        request.get('/contents/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    });

    it('/content/', (done) => {
        request.get('/content/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res).to.have.status(404);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    });

    it('/contents/png', (done) => {
        request.get('/contents/JsStore_16_16.png').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'image/png');
            done();
        });
    });

    it('folders allowed but with content not exist', (done) => {
        request.get('/contents/hi.png').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    });

    it('invalid file', (done) => {
        request.get('/fc.txt').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    });

    it("map file test - `/index.html`", (done) => {
        request.get('/index.html').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    })

    it("map file test - `/dist/index.html`", (done) => {
        request.get('/dist/index.html').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    })

    it("map file test - `/dist`", (done) => {
        request.get('/dist').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    })

    it("map file test - `/dist/`", (done) => {
        request.get('/dist/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            done();
        });
    })

});