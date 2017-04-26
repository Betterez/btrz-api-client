const expect = require("chai").expect;

const matchHeaders = (tokenPropertyName) => (response) => {
  expect(response.request._headers).to.have.property('accept', 'application/json');
  expect(response.request._headers[tokenPropertyName]).to.exists;
}

const statusCode = (code) => (response) => {
  console.log(response);
  expect(response.statusCode).to.eql(code);
}

module.exports = {
  matchHeaders,
  statusCode
}