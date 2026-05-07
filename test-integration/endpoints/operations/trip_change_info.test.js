const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    operations: (baseUrl) => { return `${baseUrl}/operations`; }
  }
});

describe("operations/trip-change-info", () => {
  it("should get the trip to change info", () => {
    const productId = "5a61f76266d8da4c4200000b";
    const params = {
      ticketNumber: "V6H6BH",
      lastName: "Ferraro",
      providerId: "595f9c7007ee12686d000032"
    };
    return api.operations.tripChangeInfo.get({token, jwtToken, productId, params});
  });
});
