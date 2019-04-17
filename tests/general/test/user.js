let {
    request,
    expect,
    browserAccept
} = require('./common');

const cookie = require('cookie');

describe("/user", () => {

    it("/{userId}", (done) => {
        request.get('/user/1').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const user = {
                id: 1,
                name: 'ujjwal',
                address: 'bhubaneswar india',
                emailId: 'ujjwal@mg.com',
                gender: 'male',
                password: 'admin'
            }
            expect(res.body).to.be.eql(user);
            done();
        })
    })

    it("/{userId} with 0", (done) => {
        request.get('/user/0').accept(browserAccept).buffer().end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/xml');
            expect(res.text).to.be.eql(`<?xml version="1.0" encoding="utf-8"?><users><user><id>1</id><name>ujjwal</name><address>bhubaneswar india</address><emailId>ujjwal@mg.com</emailId><gender>male</gender><password>admin</password></user></users>`);
            done();
        })
    })

    it("/ + post", (done) => {
        const user = {
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela'
        }
        request.post('/user').send(user).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name');
            expect(res.body).haveOwnProperty('id').equal(2);
            expect(res.body).haveOwnProperty('address');
            expect(res.body).haveOwnProperty('emailId');
            expect(res.body).haveOwnProperty('gender');
            expect(res.body).haveOwnProperty('password')
            done();
        })
    })

    it("/ + post with invalid user", (done) => {
        const user = {
            name: '',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'femalde',
            password: 'ab'
        }
        request.post('/user').send(user).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            expect(res.text).to.be.equal('password must be longer than or equal to 5 characters');
            done();
        })
    })

    it("/ + patch", (done) => {
        request.patch('/user').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(405);
            const allowsValue = res.header.allow;
            expect(allowsValue).to.contains("PUT");
            expect(allowsValue).to.contains("GET");
            expect(allowsValue).to.contains("POST");
            done();
        })
    })

    it("/ + put", (done) => {
        const user = {
            id: 2,
            name: 'angela yu',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangelayu'
        }
        request.put('/user').send(user).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.an("string").equal("user updated")
            done();
        })
    })

    it("/ + remove", (done) => {
        request.del('/user/2').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.an("string").equal("user deleted")
            done();
        })
    })

    it("/getcounter", (done) => {
        request.get('/user/counter/shield').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('authenticationShieldCounter').equal(8);
            done();
        })
    })

    it("/thrown by guard using header", (done) => {
        const body = {
            throwexceptionbyguard: 'true'
        }
        request.post('/user/').set(body).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            expect(res.text).to.contains("thrown by guard")
            done();
        })
    })

    it("/logout", (done) => {
        request.get('/default/logout').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const parsedCookie = cookie.parse(res.header[`set-cookie`][0]);
            expect(parsedCookie).haveOwnProperty(`fort_session_id`);
            expect(parsedCookie).haveOwnProperty(`Path`).equal('/');
            expect(parsedCookie).haveOwnProperty(`Max-Age`).equal('-1');
            expect(parsedCookie).haveOwnProperty(`Expires`).equal('Thu, 01 Jan 1970 00:00:00 GMT');
            expect(res.header[`set-cookie`][0]).contains('HttpOnly');
            done();
        })
    })

    it("/user after logout", (done) => {
        request.get('/user/').redirects(0).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(302);
            expect(res).to.have.header('location', '/default/login');
            done();
        })
    })

    it("/thrown by shield using header", (done) => {
        const body = {
            throwexceptionbyshield: 'true'
        }
        request.post('/user/').set(body).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            expect(res.text).to.contains("thrown by shield")
            done();
        })
    })

  
});