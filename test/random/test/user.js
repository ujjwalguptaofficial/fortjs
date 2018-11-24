let {
    request,
    expect
} = require('./common');

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

    it("/ + patch", (done) => {
        request.patch('/user/2').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(405);
            const allowsValue = res.header.allow;
            expect(allowsValue).to.contains("PUT");
            expect(allowsValue).to.contains("GET");
            expect(allowsValue).to.contains("DELETE");
            done();
        })
    })

    it("/ + put", (done) => {
        const user = {
            name: 'angela yu',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangelayu'
        }
        request.put('/user/2').send(user).end((err, res) => {
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
});