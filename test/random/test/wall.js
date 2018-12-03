let {
    request,
    expect
} = require('./common');

describe("wall test", () => {
    it("/getdata", (done) => {
        request.get('/default/getdata').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('reqCount').equal(35);
            done();
        })
    })
})