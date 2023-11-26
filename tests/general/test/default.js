let {
    request,
    expect,
    browserAccept,
    url,
    httpClient,
    forbiddenText,
    methodNotAllowedMsg,
    badRequestMsg,
    removeSpaceAndNewLine,
    isProduction
} = require('./common');

const cookie = require('cookie');

describe("/default", () => {

    it('default path', (done) => {
        request.get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // due to content negotiation content type is text/plain
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.header['x-powered-by']).to.equal('fort');
            expect(removeSpaceAndNewLine(res.text)).to.be.equal('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>');
            done();
        })
    })

    it('index1 - multiple assign', (done) => {
        request.get('/index1').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // due to content negotiation content type is text/plain
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.header['x-powered-by']).to.equal('fort');
            expect(res.text).to.be.equal('UjjwalGupta');
            done();
        })
    })

    it('default path with browserAccept', (done) => {
        request.get('/').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // due to content negotiation
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.header['x-powered-by']).to.equal('fort');
            expect(removeSpaceAndNewLine(res.text)).to.be.equal('<html><head><title>Welcometofort</title></head><body><h1>Index</h1></body></html>');
            done();
        })
    })

    it('/friends with get', (done) => {
        request.get('/friends').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.text).to.be.equal('{"friends":["mohan","sohan"]}');
            done();
        })

    })

    it('/friends with post', (done) => {
        request.post('/friends').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        })

    })

    it('/friends with put', (done) => {

        request.put('/friends').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(405);
            done();
        })

    })

    it('/get-mongo', (done) => {
        request.get('/get-mongo').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        })
    })

    it('/get-mongo with browserAccept', (done) => {
        request.get('/get-mongo').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            done();
        })
    })

    it('/singleton test', (done) => {
        var value = 'asf'
        request.get('/setSingletonValue?value=' + value).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
        })

        request.get('/getSingletonValue').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.equal(value);
            done();
        })
    })

    it('/workerWithoutPromise', (done) => {
        console.log('isProduction', isProduction)
        // if (isProduction) {
        //     done();
        // }
        // else {
        request.get('/workerWithoutPromise?doNotCount=true').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            // expect(res.text).to.contains('message : Wrong implementation - worker does not return promise')
            done();
        })
        // }
    })

    it('empty controller', (done) => {
        request.get('/empty/noWorker').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(500);
            expect(res.text).to.contains('Invalid route registration in Controller : EmptyController and method : dailyAccountBalance.Route exist but method has not been decorated with worker.')
            done();
        })
    })
});