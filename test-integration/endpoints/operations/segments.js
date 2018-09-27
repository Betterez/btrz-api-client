const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    operations: (baseUrl) => `${baseUrl}/operations`
  }
});

describe("operations/segments", function() {

  it("should get segments for product and ticket", function() {
    const productId = "595f9c7007ee12686d000033",
      ticketId = "5bad3ef2b726b6716b9567df",
      providerId = "595f9c7007ee12686d000032";
    return api.operations.segments.all({ token, jwtToken, productId, ticketId, providerId });
  });

});
