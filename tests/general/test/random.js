let {
    request,
    expect,
    removeSpaceAndNewLine
} = require('./common');
var FormData = require('form-data');
var fs = require('fs');

describe("/random", () => {

    it("/ + accept:text/html", (done) => {
        request.get('/random/').accept("text/html").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("<p>hello world</p>");
            done();
        })
    })

    it("/ + accept:text/plain", (done) => {
        request.get('/random/').accept("text/plain").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("hello world");
            done();
        })
    })

    it("/ + accept:application/json", (done) => {
        request.get('/random/').accept("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const result = {
                result: "hello world"
            };
            expect(res.body).to.be.eql(result);
            done();
        })
    })

    it("/ + accept:application/xml", (done) => {
        request.get('/random/').accept("application/xml").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(406);
            done();
        })
    })

    it("/form", (done) => {
        const data = {
            hello: 'world'
        }
        request.post('/random/form').accept("application/json").type('form').send(data).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql(data);
            done();
        })
    })

    it("/throw", (done) => {
        request.post('/random/throw').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            expect(removeSpaceAndNewLine(res.text)).to.be.eql('<h1>internalservererror</h1><h3>message:throwtest</h3>');
            done();
        })
    })

    it("/download + get", (done) => {
        request.get('/random/download').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res).to.have.header('content-disposition', 'attachment;filename=index.html');
            done();
        })
    })

    it("/download + post", (done) => {
        request.post('/random/download').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res).to.have.header('content-disposition', 'attachment;filename=alias.html');
            done();
        })
    })

    it("/file", (done) => {
        request.post('/random/file').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'image/png');
            expect(res).to.have.header('content-disposition', undefined);
            done();
        })
    })

    // it("/file + unsupported accept", (done) => {
    //     request.post('/random/file').accept("application/json").end((err, res) => {
    //         expect(err).to.be.null;
    //         expect(res).to.have.status(406);
    //         expect(res).to.have.header('content-type', 'text/html');
    //         expect(res).to.have.header('content-disposition', undefined);
    //         done();
    //     })
    // })

    it("/null + get", (done) => {
        request.get('/random/null').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal("");
            done();
        })
    })

    it("/status-override using wall", (done) => {
        request.get('/random/status-override').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal("overrided");
            done();
        })
    })
})