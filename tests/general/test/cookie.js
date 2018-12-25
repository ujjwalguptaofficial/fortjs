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
        const stringUrlPart = `user_name`;
        request.post(`/cookie/${stringUrlPart}`).send(cookies).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name').equal(stringUrlPart);
            expect(res.body).haveOwnProperty('value').equal(cookies.cookieValue);
            //console.log('headers', res.header);
            const parsedCookie = cookie.parse(res.header[`set-cookie`][0]);
            //console.log('cookie', parsedCookie);
            expect(parsedCookie).haveOwnProperty(stringUrlPart).equal(cookies.cookieValue);
            expect(parsedCookie).haveOwnProperty(`Max-Age`).equal(`5000`);

            done();
        })
    })
})