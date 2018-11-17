let {
    request,
    expect,
    browserAccept,
    url,
    forbiddenText
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
});