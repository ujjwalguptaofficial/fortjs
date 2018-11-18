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
            console.log("body", res.body);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('name');
            expect(res.body).haveOwnProperty('id');
            expect(res.body).haveOwnProperty('address');
            expect(res.body).haveOwnProperty('emailId');
            expect(res.body).haveOwnProperty('gender');
            expect(res.body).haveOwnProperty('password')
            done();
        })
    })
});