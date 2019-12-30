let {
    request,
    expect,
    browserAccept,
    url,
    httpClient,
    forbiddenText,
    methodNotAllowedMsg,
    badRequestMsg,
    removeSpaceAndNewLine
} = require('./common');

const cookie = require('cookie');

describe("/home", () => {

    it('/json + browser accept setting', (done) => {
        require('axios').default.get(`${url}/home/json`, {
            headers: {
                'Accept': browserAccept
            }
        }).then(res => {
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/xml');
            expect(res.data).to.be.equal('<?xml version="1.0" encoding="utf-8"?><root><key>hello</key><value>world</value></root>');
            done();
        }).catch(done)
    })

    it('/json', (done) => {
        request.get('/home/json').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.text).to.be.equal('{"key":"hello","value":"world"}');
            done();
        })
    })

    it('/html', (done) => {
        request.get('/home/html').accept(browserAccept).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.text).to.be.equal('<h1>hey there i am html</h1>');
            done();
        })
    })

    it('/text', (done) => {
        request.get('/home/text').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('text');
            done();
        })
    })

    it('/text + http: post', (done) => {
        request.post('/home/text').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(405);
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res).to.have.header('content-type', 'text/html');
            expect(res).to.have.header('allow', 'GET');
            expect(res.text).to.be.equal(methodNotAllowedMsg);
            done();
        })
    })

    it('/post with no body', (done) => {
        request.post('/home/post').type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res.text).to.contains("message : Post data is invalid");
            done();
        })
    })

    it('/post with empty body', (done) => {
        request.post('/home/post').send({}).type("application/json").end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res.text).to.be.equal('{}');
            done();
        })
    })

    it('/post ', (done) => {
        const data = {
            key: "hello"
        };
        request.post('/home/post').send(data).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'application/json');
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res.text).to.be.equal('{"key":"hello"}');
            done();
        })
    });

    it('/post with xml', (done) => {
        const data = `<?xml version="1.0" encoding="UTF-8" ?>
        <key>hello</key>`
        request.post('/home/post').type('application/xml').send(data).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res.text).to.contains('message : no xml parser configured');
            done();
        })
    });

    it('/post + http: get', (done) => {
        request.get('/home/post').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(405);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res).to.have.header('allow', 'POST');
            expect(res.text).to.be.equal(methodNotAllowedMsg);
            done();
        })
    })

    it('/post + http method: option', (done) => {
        request.options('/home/post').end((err, res) => {
            console.log(res.header);
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/html');
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res).to.have.header('allow', 'POST');
            expect(res.text).to.be.equal("");
            done();
        })
    })

    it("/redirect test", (done) => {
        request.get('/home/redirect').redirects(0).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(302);
            expect(res).to.have.header('custom-header-from-outgoing-wall', '*');
            expect(res).to.have.header('location', 'html');
            done();
        })
    })

    it("/user allowMe without login", (done) => {
        request.get('/user/allow/Me').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.have.header('content-type', 'text/plain');
            expect(res.text).to.be.equal('i am allowed');
            done();
        })
    })

    it("/user without login", (done) => {
        request.get('/user/').redirects(0).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(302);
            expect(res).to.have.header('location', '/default/login');
            done();
        })
    })

    it("/default/login", (done) => {
        const user = {
            emailId: `ujjwal@mg.com`,
            password: "admin"
        }
        request.post('/home/login').send(user).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.equal("Authenticated");
            //console.log('headers', res.header);
            const parsedCookie = cookie.parse(res.header[`set-cookie`][0]);
            console.log('cookie', parsedCookie);
            expect(parsedCookie).haveOwnProperty(`fort_session_id`);
            expect(parsedCookie).haveOwnProperty(`Path`).equal('/');
            expect(parsedCookie).haveOwnProperty(`Max-Age`).equal('3600');
            expect(res.header[`set-cookie`][0]).contains('HttpOnly');
            done();
        })
    })

    it('/singleton test', (done) => {

        var value = 'hello';
        request.get('/getSingletonValue').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.equal('asf');

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
    })

    it('/getUsers', (done) => {
        request.get('/home/getUsers').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const user = [{
                id: 1,
                name: 'ujjwal',
                address: 'bhubaneswar india',
                emailId: 'ujjwal@mg.com',
                gender: 'male',
                password: 'admin'
            }]
            expect(res.body).to.be.eql(user);
            done();
        });
    });

    it('/getStudents', (done) => {
        request.get('/home/getStudents').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const data = [{
                id: 1,
                name: 'ujjwal',
                type: 'student'
            }]
            expect(res.body).to.be.eql(data);
            done();
        });
    });

    it('/getEmployees', (done) => {
        request.get('/home/getEmployees').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const data = [{
                id: 1,
                name: 'ujjwal',
                type: 'employee'
            }]
            expect(res.body).to.be.eql(data);
            done();
        });
    });

    it('/getAllFromServices', (done) => {
        request.get('/home/getAllFromServices').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            const data = [{
                id: 1,
                name: 'ujjwal',
                type: 'student'
            }, {
                id: 1,
                name: 'ujjwal',
                type: 'employee'
            }, {
                id: 1,
                name: 'ujjwal',
                address: 'bhubaneswar india',
                emailId: 'ujjwal@mg.com',
                gender: 'male',
                password: 'admin'
            }]
            expect(res.body).to.be.eql(data);
            done();
        });
    });
});