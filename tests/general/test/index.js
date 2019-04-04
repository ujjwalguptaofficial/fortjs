let chai = require('chai');
let chaiHttp = require('chai-http');
let {
    request,
    expect,
    browserAccept,
    url,
    forbiddenText
} = require('./common');



chai.use(chaiHttp);
require('../build/app');
// require('./server');
require('./cookie');
require('./default');
require('./file_test');
require('./random');
require('./user');
require('./session');

require('./wall');

// process.exit(0);


// run();






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