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

describe("/file", () => {

    it('default path', (done) => {
        request.get('/file').end((err, res) => {
            expect(res.text).to.contains('Welcome to FortJs');
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.header['x-powered-by']).to.equal('MyFort');
            done();
        });
    })

    it("/scripts/bundle.js", done => {
        request.get('/file/scripts/bundle.js').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/javascript');
            done();
        });
    })

    it("/scripts/bundle", done => {
        request.get('/file/scripts/bundle').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    })

    it("/scripts/bundle.fgh", done => {
        request.get('/file/scripts/bundle').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    })

    it("/scripts/bundle.jsf", done => {
        request.get('/file/scripts/bundle').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    })

    it("/script/bundle.jsf", done => {
        request.get('/file/scripts/bundle').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    })

    it('/upload without any file', (done) => {
        request.post('/file/upload').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body.responseText).to.be.equal('file not saved');
            expect(res.body.count).to.be.equal(0);
            done();
        });
    })

    it('/upload with right file name', (done) => {
        request.post('/file/upload').attach("jsstore", "static/fort_js_logo_200_137.png").end((err, res) => {
            expect(err).to.be.null;
            console.log("body", res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body.responseText).to.be.equal('file saved');
            expect(res.body.fieldName).to.be.equal('jsstore');
            expect(res.body.count).to.be.equal(1);
            expect(res.body.fileName).to.be.equal('fort_js_logo_200_137.png');
            expect(res.body.data).to.eql({
                "fileInfo": {
                    "fieldName": "jsstore",
                    "fileName": "fort_js_logo_200_137.png"
                },
                "query": {
                },
                "singletonFileName": "upload.png",
                "className": "FileName"
            });
            done();
        });
    })


    it('/upload with right file name with query', (done) => {
        request.post('/file/upload?test=1').attach("jsstore", "static/fort_js_logo_200_137.png").end((err, res) => {
            expect(err).to.be.null;
            console.log("body", res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body.responseText).to.be.equal('file saved');
            expect(res.body.fieldName).to.be.equal('jsstore');
            expect(res.body.count).to.be.equal(1);
            expect(res.body.fileName).to.be.equal('fort_js_logo_200_137.png');
            expect(res.body.data).to.eql({
                "fileInfo": {
                    "fieldName": "jsstore",
                    "fileName": "fort_js_logo_200_137.png"
                },
                "query": {
                    test: '1'
                },
                "singletonFileName": "upload.png",
                "className": "FileName"
            });
            done();
        });
    })

    it('/file check after upload without any file', (done) => {
        request.post('/file/upload').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body.responseText).to.be.equal('file not saved');
            expect(res.body.count).to.be.equal(0);
            done();
        });
    })

    it('/upload with wrong file name', (done) => {
        request.post('/file/upload').attach("jsstdddore", "static/fort_js_logo_200_137.png").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body).to.eql({
                success: false,
                message: 'invalid file'
            });
            done();
        });
    })
});
