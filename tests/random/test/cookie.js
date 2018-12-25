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

describe("/cookie", () => {
    it("/{cookie}", (done) => {
        request.get('/cookie/session').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            console.log(res.text);
            expect(res.text).to.be.eql('cookie not found');
            done();
        })
    })

    it("/ + post", (done) => {
        const cookies = {
            cookieValue: 'ujjwal'
        }
        request.post('/cookie/user_name').send(cookies).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name').equal(`user_name`);
            expect(res.body).haveOwnProperty('value').equal(cookies.cookieValue);
            console.log('headers', res.header[`set-cookie`]);
            const parsedCookie = cookie.parse(res.header[`set-cookie`]);
            console.log('cookie', parsedCookie);
            done();
        })
    })
})