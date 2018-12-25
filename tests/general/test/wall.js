let {
    request,
    expect
} = require('./common');

describe("wall test", () => {
    it("/blocked by wall using get", (done) => {
        const body = {
            blockByWall: true
        }
        request.get('/default/getdata').query(body).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.equal('blocked by wall');
            done();
        })
    })

    it("/blocked by wall using header", (done) => {
        const body = {
            blockByWall: 'true'
        }
        request.post('/default/getdata').set(body).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.equal('blocked by wall');
            done();
        })
    })


    it("/getdata", (done) => {
        request.get('/default/getdata').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).haveOwnProperty('reqCount').equal(44);
            done();
        })
    })
})