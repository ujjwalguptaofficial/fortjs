let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../build/app');
let {
    request,
    expect,
    browserAccept,
    url,
    forbiddenText
} = require('./common');
chai.use(chaiHttp);



// describe("App level test", () => {
//     it("stop app", (done) => {
//         request.get('/user/').end((err, res) => {
//             expect(err).to.be.null;
//             expect(res).to.have.status(403);
//             expect(res.text).to.be.equal(forbiddenText);
//             done();
//         })
//     })
// });
