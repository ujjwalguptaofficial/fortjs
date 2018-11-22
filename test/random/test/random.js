let {
    request,
    expect
} = require('./common');

describe("/random", () => {

    it("/ + accept:text/html", (done) => {
        request.get('/random/').accept("text/html").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("<p>hello world</p>");
            done();
        })
    })

    it("/ + accept:text/plain", (done) => {
        request.get('/random/').accept("text/plain").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("hello world");
            done();
        })
    })

    it("/ + accept:application/json", (done) => {
        request.get('/random/').accept("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const result = {
                result: "hello world"
            };
            expect(res.body).to.be.eql(result);
            done();
        })
    })

    it("/ + accept:application/xml", (done) => {
        request.get('/random/').accept("application/xml").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(406);
            done();
        })
    })

    it("/form", (done) => {
        const data = {
            hello: 'world'
        }
        request.post('/random/form').accept("application/json").type('form').send(data).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql(data);
            done();
        })
    })
})