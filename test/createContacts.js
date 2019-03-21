const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app/app');

chai.should();
chai.use(chaiHttp);

const contactInfo = {
    name: "John Doe",
    phoneNumber: "07123456789",
    address: "123 Some Road"
};

describe('POST /contact', () => {
    it('should create a contact', (done) => {
        chai.request(app).post('/contact').send(contactInfo).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.success.should.equal(1);
            res.body.message.should.equal("Contact created");
            expect(res.body.id).to.match(/\w+/);
            done();
        });
    });
});