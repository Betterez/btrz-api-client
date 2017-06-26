const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('sales/custom-fields', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list custom fields", function() {
    axiosMock.onGet("/custom-fields").reply(expectRequest({ statusCode: 200, token }));
    return api.sales.customFields.all({ token });
  });

}); 