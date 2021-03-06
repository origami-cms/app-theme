const {Origami} = require('origami-cms');
const chai = require("chai");
const fs = require("fs");
const {promisify} = require("util");
const path = require("path");
const chaiAsPromised = require("chai-as-promised");
const chaiHttp = require('chai-http');

var {expect} = chai;
var should = chai.should();
chai.use(chaiAsPromised);
chai.use(chaiHttp);

const stat = promisify(fs.stat);
const read = promisify(fs.readFile);

const EMAIL = 'hello@tristanmatthias.com';

const app = new Origami({
    "app": {
        "name": "test"
    },
    "store": {
        "type": "mongodb",
        "host": "localhost",
        "port": "27017",
        "database": "origami-plugin-theme",
        "username": "origami",
        "password": "origami"
    },
    "server": {
        "port": 9999,
        "secret": "37054f5ec40817ce0273769599fe4cf7"
    },
    "plugins": {
        // Disable default user-profile bundled in core-server
        "user-profiles": false,
        "./build/index": true,
    }
});


const get = id => chai.request(app.server.app)
    .get(`/content/profiles/${id}`)
    .then(r => {
        expect(Buffer.isBuffer(r.body)).to.be.true;
        return r;
    });


before(done => app.ready(done));


describe('Origami Plugin: Theme', () => {
    after(done => {
        app.server.stop();
        done();
    });

    describe('Setup Origami', () => {
        it('should run', () => {
            should.exist(app.server);
        });

        it('should setup first user', done => {
            chai.request(app.server.app)
                .post('/api/v1/setup/user')
                .send({
                    "fname": "Origami",
                    "lname": "Test",
                    "email": EMAIL,
                    "password": "origami"
                })
                .then(res => {
                    expect(res).to.be.json;
                    expect(res.body.data).to.exist
                    expect(res.body.data.email).to.equal(EMAIL);
                    userID = res.body.data.id;
                    done();
                })
        });
    });

    // TODO: Add test cases
});
