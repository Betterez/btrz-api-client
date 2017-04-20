const expect = require("chai").expect;

const matchHeaders = (tokenPropertyName) => (response) => {
  expect(response.request._headers).to.have.property('accept', 'application/json');
  expect(response.request._headers[tokenPropertyName]).to.exists;
}

module.exports = {
  matchHeaders
}