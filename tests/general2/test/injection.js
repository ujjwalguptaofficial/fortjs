let {
    request,
    expect
} = require('./common');

describe("Injection", () => {
    it("/getMultipleStringInjection", (done) => {
        
        request.get('/Injection/getMultipleStringInjection').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const data =  {"value":["Welcome to fort","Hello World","ujjwal","Gupta"]};
            expect(res.body).to.be.eql(data);
            done();
        })
    })
})