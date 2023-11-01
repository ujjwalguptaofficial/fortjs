let {
    request,
    expect, removeSpaceAndNewLine
} = require('./common');

describe("wall test", () => {
    it("/blocked by wall using get", (done) => {
        const query = {
            blockByWall: true
        }
        request.get('/default/getdata').query(query).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.equal('blocked by wall');
            expect(res).to.have.header('custom-header-from-outgoing-wall', null);
            done();
        })
    })

    it("/blocked by wall using header", (done) => {
        const header = {
            blockByWall: 'true'
        }
        request.post('/home/getdata').set(header).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('custom-header-from-outgoing-wall', null);
            expect(res.text).to.be.equal('blocked by wall');
            done();
        })
    })

    it("/thrown by wall using header", (done) => {
        const body = {
            throwException: 'true'
        }
        request.post('/home/getdata').set(body).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            expect(res.text).to.contains("thrown by wall");
            done();
        })
    })

    it("/404", (done) => {
        request.get('/home/getdatasss').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            expect(res.body).to.be.an("object");
            expect(res).to.have.header('custom-header-from-incoming-wall', '*');
            expect(res).to.have.header('injection-result', 'wall constructor onIncoming called on outgoing called');
            expect(res).to.have.header('wall-without-outgoing-wall', '*');
            done();
        })
    })

    it("/500 by controler", (done) => {
        request.post('/random/throw').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            expect(removeSpaceAndNewLine(res.text)).to.be.eql('<h1>internalservererror</h1><h3>message:throwtest</h3>');

            expect(res.body).to.be.an("object");
            expect(res).to.have.header('custom-header-from-incoming-wall', '*');
            done();
        })
    })

    it("/getdata", (done) => {
        request.get('/home/getdata').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res).to.have.header('custom-header-from-incoming-wall', '*');
            expect(res).to.have.header('injection-result', 'wall constructor onIncoming called on outgoing called');
            expect(res).to.have.header('wall-without-outgoing-wall', '*');
            expect(res.body).haveOwnProperty('reqCount').equal(115);
            done();
        })
    })


})