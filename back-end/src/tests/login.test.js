/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
// include the testing dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); // use the chai-http middleware to simplify testing routes
const expect = chai.expect; // the assertion library in the style using the word 'expect'
const should = chai.should(); // the same assertion library in the style using the word 'should'

// import the server
const server = require('../app');

// a group of tests related to the /protected route
describe('Login', () => {
  /**
   * test the POST /login route
   */
  const formData = {username: 'bla', password: 'wrong'}; // mock form data with incorrect credentials
  describe('POST /login with incorrect username/password', () => {
    it('it should return a 401 HTTP response code', (done) => {
      chai
          .request(server)
          .post('/login')
          .type('form')
          .send(formData)
          .end((err, res) => {
            res.should.have.status(401); // use 'should' to make BDD-style assertions
            done(); // resolve the Promise that these tests create so mocha can move on
          });
    });
  });

  describe('POST /login with correct username/password', () => {
    const formData = {username: 'foo', password: 'bar'}; // mock form data with correct credentials
    it('it should return a 200 HTTP response code', (done) => {
      chai
          .request(server)
          .post('/login')
          .type('form')
          .send(formData)
          .end((err, res) => {
            res.should.have.status(200); // use 'should' to make BDD-style assertions
            done(); // resolve the Promise that these tests create so mocha can move on
          });
    });
  });
});
