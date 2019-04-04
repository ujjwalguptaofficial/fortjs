let {
    request,
    expect,
    browserAccept
} = require('./common');

const cookie = require('cookie');

describe("/session", () => {

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('key is not found');
            done();
        })
    })

    it("/session/add", (done) => {
        const payload = {
            key: "id",
            value: 5
        }
        request.post('/session/add').send(payload).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("saved");
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('5');
            done();
        })
    })

    it("/session/update", (done) => {
        const payload = {
            key: "id",
            value: 6
        }
        request.put('/session/update').send(payload).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("updated");
            done();
        })
    })


    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('6');
            done();
        })
    })


    it("/remove", (done) => {
        request.del('/session/remove').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.an("string").equal("removed")
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('key is not found');
            done();
        })
    })
});