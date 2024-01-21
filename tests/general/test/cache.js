let {
    request,
    expect,
    browserAccept
} = require('./common');


describe("/user", () => {

    it("/get cache for not saved data", (done) => {
        request.post('/cache/get').send({
            key: "Hello"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql({
            })
            done();
        })
    })

    it("check cache size", (done) => {
        request.delete('/cache/count').end((_, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.eql({
                data: 0
            });
            done();
        });
    })

    it("/add cache", (done) => {
        request.post('/cache/add').send({
            key: "Hello",
            value: "World"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("Ok")
            done();
        })
    })

    it("/get cache for saved data", (done) => {
        request.post('/cache/get').send({
            key: "Hello"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql({
                value: "World"
            })
            done();
        })
    })

    it("/update cache", (done) => {
        request.post('/cache/add').send({
            key: "Hello",
            value: "Fortjs"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("Ok")
            done();
        })
    })

    it("check cache size", (done) => {
        request.delete('/cache/count').end((_, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.eql({
                data: 1
            });
            done();
        });
    })

    it("/get cache for saved data", (done) => {
        request.post('/cache/get').send({
            key: "Hello"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql({
                value: "Fortjs"
            })
            done();
        })
    })

    it("/delete cache for saved data", (done) => {
        request.post('/cache/delete').send({
            key: "Hello"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql({
                data: true
            })
            done();
        })
    })

    it("check cache size", (done) => {
        request.delete('/cache/count').end((_, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.eql({
                data: 0
            });
            done();
        });
    })

    it("/get cache for deleted data", (done) => {
        request.post('/cache/get').send({
            key: "Hello"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql({
            })
            done();
        })
    })

    it("/add cache with ttl", (done) => {
        request.post('/cache/add').send({
            key: "TTL",
            value: "Check",
            expiry: 1
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.text).to.be.eql("Ok")
            done();
        })
    })

    it("/get cache for saved data", (done) => {
        request.post('/cache/get').send({
            key: "TTL"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.eql({
                value: "Check"
            })
            done();
        })
    })

    it("check cache size", (done) => {
        request.delete('/cache/count').end((_, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.eql({
                data: 1
            });
            done();
        });
    })

    it("/check after 1 second", (done) => {
        setTimeout(() => {
            request.post('/cache/get').send({
                key: "TTL"
            }).end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.eql({

                })
                done();
            })
        }, 1000);
    })

    it("check cache size", (done) => {
        request.delete('/cache/count').end((_, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.eql({
                data: 0
            });
            done();
        });
    })

    it("cache fruits", (done) => {
        request.get('/cache/fruits').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            request.get('/cache/fruits-without-cache').end((_, response) => {
                expect(res.body).to.be.eql({
                    data: response.body.data
                })
                done();
            });
        })
    })

    it("cache fruits check after updating fruits value", (done) => {
        const fruits = ['Apple'];
        request.post('/cache/fruits').send({
            fruits: fruits
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            request.get('/cache/fruits').end((_, response) => {
                expect(response.body).to.be.not.eql({
                    data: fruits
                })
                done();
            });
        })
    })

    it("expire cache fruits and check new fruits value", (done) => {
        const fruits = ['Apple'];
        setTimeout(() => {
            request.get('/cache/fruits').end((_, response) => {
                expect(response.body).to.be.not.eql({
                    data: fruits
                })
                done();
            });
        }, 1000);
    })

    it("get cache store", (done) => {
        request.put('/cache/store').end((_, response) => {
            expect(response.status).to.be.equal(200);
            const store = response.body.data;
            const storeKeys = Object.keys(store);
            expect(storeKeys.length).to.be.eql(1);
            expect(storeKeys).to.be.eql(["CacheController_getFruits"]);
            done();
        });
    })
});