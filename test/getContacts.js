const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/app');

chai.should();
chai.use(chaiHttp);

describe('GET /contact', () => {
    it('should GET back all contacts', (done) => {
        chai.request(app).get('/contact').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.contact.should.be.a('array');
            done();
        });
    });
});