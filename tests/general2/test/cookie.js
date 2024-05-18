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
    it("/{cookie} with get for invalid cookie", (done) => {
        request.get('/cookie/session').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            expect(res.text).to.be.eql('cookie not found');
            done();
        })
    })

    it("/ + post", (done) => {
        const cookies = {
            cookieValue: 'ujjwal'
        }
        const cookieName = `user_name`;
        request.post(`/cookie/${cookieName}`).send(cookies).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name').equal(cookieName);
            expect(res.body).haveOwnProperty('value').equal(cookies.cookieValue);
            //console.log('headers', res.header);
            const parsedCookie = cookie.parse(res.header[`set-cookie`][0]);
            //console.log('cookie', parsedCookie);
            expect(parsedCookie).haveOwnProperty(cookieName).equal(cookies.cookieValue);
            expect(parsedCookie).haveOwnProperty(`Max-Age`).equal(`5000`);

            done();
        })
    })

    it("/{cookie} with get for valid cookie", (done) => {
        const cookieName = `user_name`;

        request.get(`/cookie/${cookieName}`).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name').equal(cookieName);
            expect(res.body).haveOwnProperty('value').equal('ujjwal');
            done();
        })
    })

    it("/{cookie} with put", (done) => {
        const cookieName = `user_name`;
        const cookies = {
            cookieValue: 'ujjwal_gupta'
        }
        request.put(`/cookie/${cookieName}`).send(cookies).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name').equal(cookieName);
            expect(res.body).haveOwnProperty('value').equal(cookies.cookieValue);
            // console.log('headers', res.header);
            const parsedCookie = cookie.parse(res.header[`set-cookie`][0]);
            // console.log('cookie', parsedCookie);
            expect(parsedCookie).haveOwnProperty(cookieName).equal(cookies.cookieValue);
            done();
        })
    })

    it("/{cookie} with remove", (done) => {
        const cookieName = `user_name`;
        const cookies = {
            cookieValue: 'ujjwal_gupta'
        }
        request.del(`/cookie/${cookieName}`).send(cookies).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // console.log('headers', res.header);
            const parsedCookie = cookie.parse(res.header[`set-cookie`][0]);
            //console.log('cookie', parsedCookie);
            expect(parsedCookie).haveOwnProperty(cookieName).equal(cookies.cookieValue);
            expect(parsedCookie).haveOwnProperty(`Max-Age`).equal('-1');
            expect(parsedCookie).haveOwnProperty(`Expires`).equal('Thu, 01 Jan 1970 00:00:00 GMT');
            done();
        })
    })

    it("/{cookie} with get after deleting cookie", (done) => {
        request.get('/cookie/user_name').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            expect(res.text).to.be.eql('cookie not found');
            done();
        })
    })
})