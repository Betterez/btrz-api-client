const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('operations/segments', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get segments for product and ticket", function() {
    const productId = "productId1",
      ticketId = "ticketId1";
    axiosMock.onGet(`/products/${productId}/segments/${ticketId}`)
      .reply(expectRequest({ statusCode: 200, token }));
    return api.operations.segments.all({ token, jwtToken, productId, ticketId });
  });

});
