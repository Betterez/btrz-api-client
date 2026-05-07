const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    operations: (baseUrl) => { return `${baseUrl}/operations`; }
  }
});

describe("operations/segments", () => {
  it("should get segments for product and ticket", () => {
    const productId = "595f9c7007ee12686d000033";
    const ticketId = "5bad3ef2b726b6716b9567df";
    const providerId = "595f9c7007ee12686d000032";
    return api.operations.segments.all({token, jwtToken, productId, ticketId, providerId});
  });
});
