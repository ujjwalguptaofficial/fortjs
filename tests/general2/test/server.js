let {
    initServer,
    Router
} = require('../build/app');
let {
    request,
    expect,
    removeSpaceAndNewLine
} = require('./common');

describe("/server test", () => {
    it("start server", (done) => {
        initServer().then(() => {
            console.log("Your fort is located at address - localhost:8080");
            console.log("routes are: ", JSON.stringify(new Router().routes))
            done();
        }).catch(done)
    })

    it("used port test", (done) => {
        initServer().then(done).catch((err) => {
            const error = {
                "message": "Port 8080 is being used by another process.",
                "type": "port_in_use"
            };
            expect(err).to.be.an('object').eql(error);
            done();
        })
    })
});