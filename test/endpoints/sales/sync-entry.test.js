const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "" });
const expect = require("chai").expect;

describe('sales/sync-entry', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'

  afterEach(function() {
    axiosMock.reset();
  });

  it("should add an entry in synchrotron", function() {
    const data = {};
    axiosMock.onPost("/sync-entry").reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.sales.syncEntry.add({ jwtToken, token, data});
  });

});
