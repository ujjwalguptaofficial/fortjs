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

describe("/expect", () => {

    it('convert', (done) => {
        request.get('/expect/convert').query({ id: 0, name: "", extra: "" }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(removeSpaceAndNewLine(res.text)).to.be.equal('ok');
            done();
        })
    })

    it('convert post', (done) => {
        request.post('/expect/convert').send({ id: 0, name: "", extra: "" }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(removeSpaceAndNewLine(res.text)).to.be.equal('ok');
            done();
        })
    })
});