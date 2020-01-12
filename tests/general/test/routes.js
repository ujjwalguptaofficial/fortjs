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
const queryStringErrMessage = "Bad query string data - query string data does not match with expected value";
const bodyErrorMessage = "Bad body data - body data does not match with expected value";

describe("/expect", () => {

    it('routes default', (done) => {
        request.get('/api/routes').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            // expect(removeSpaceAndNewLine(res.text)).to.be.equal('ok');
            done();
        })
    })

    it('routes default with extra slash', (done) => {
        request.get('/api/routes/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            // expect(removeSpaceAndNewLine(res.text)).to.be.equal('ok');
            done();
        })
    })

    it('/api/routes/someMethod', (done) => {
        request.get('/api/routes/someMethod').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            // expect(removeSpaceAndNewLine(res.text)).to.be.equal('ok');
            done();
        })
    })
});