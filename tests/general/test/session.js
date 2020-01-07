let {
    request,
    expect,
    browserAccept
} = require('./common');

const cookie = require('cookie');

describe("/session", () => {

    it("/exist", (done) => {
        request.get('/session/exist?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('key is not found');
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body).to.be.deep.equal({ value: null });
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

    it("/exist", (done) => {
        request.get('/session/exist?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('key is found');
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body).to.be.deep.equal({ value: 5 });
            done();
        })
    })

    it("/session/update", (done) => {
        const payload = {
            key: "id",
            value: '6'
        }
        request.put('/session/update').send(payload).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("updated");
            done();
        })
    })

    it("/exist", (done) => {
        request.get('/session/exist?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('key is found');
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body).to.be.deep.equal({ value: '6' });
            done();
        })
    })


    it("/remove", (done) => {
        request.del('/session/remove?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.an("string").equal("removed")
            done();
        })
    })

    it("/exist", (done) => {
        request.get('/session/exist?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('key is not found');
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=id').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body).to.be.deep.equal({ value: null });
            done();
        })
    })

    it("/session/add-many", (done) => {
        const payload = {
            key1: "hello",
            value1: 'world',
            key2: 'ujjwal',
            value2: 'gupta'
        }
        request.post('/session/add-many').send(payload).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("saved");
            done();
        })
    })

    it("/get", (done) => {
        request.get('/session/get?key=hello').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.body).to.be.deep.equal({ value: 'world' });


            request.get('/session/get?key=ujjwal').end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.have.header('content-type', 'application/json');
                expect(res.body).to.be.deep.equal({ value: 'gupta' });
                done();
            })
        })
    })
});