const assert = require("node:assert/strict");

function matchHeaders(tokenPropertyName) {
  return (response) => {
    assert.strictEqual(response.request._headers.accept, "application/json");
    assert.ok(response.request._headers[tokenPropertyName]);

    return response;
  };
}

function statusCode(code) {
  return (response) => {
    assert.deepStrictEqual(response.status, code);
    return response;
  };
}

module.exports = {
  matchHeaders,
  statusCode
};
