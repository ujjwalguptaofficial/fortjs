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

const cookie = require('cookie');

describe("/default", () => {

    it('default path', (done) => {
        request.get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // due to content negotiation content type is text/plain
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.header['x-powered-by']).to.equal('fort');
            expect(removeSpaceAndNewLine(res.text)).to.be.equal('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>');
            done();
        })
    })

    it('default path with browserAccept', (done) => {
        request.get('/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // due to content negotiation
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.header['x-powered-by']).to.equal('fort');
            expect(removeSpaceAndNewLine(res.text)).to.be.equal('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>');
            done();
        })
    })

    it('/friends with get', (done) => {
        request.get('/friends').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.text).to.be.equal('{"friends":["mohan","sohan"]}');
            done();
        })

    })

    it('/friends with post', (done) => {
        request.post('/friends').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        })

    })

    it('/friends with put', (done) => {

        request.put('/friends').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(405);
            done();
        })

    })

    it('/get-mongo', (done) => {
        request.get('/get-mongo').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        })
    })

    it('/get-mongo with browserAccept', (done) => {
        request.get('/get-mongo').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            done();
        })
    })

});