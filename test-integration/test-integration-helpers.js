const expect = require("chai").expect;

const matchHeaders = (tokenPropertyName) => (response) => {
  expect(response.request._headers).to.have.property('accept', 'application/json');
  expect(response.request._headers[tokenPropertyName]).to.exists;

  return response;
}

const statusCode = (code) => (response) => {
  expect(response.status).to.eql(code);
  return response;
}

module.exports = {
  matchHeaders,
  statusCode
}