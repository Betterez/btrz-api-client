const {matchHeaders, statusCode} = require("./../../test-integration-helpers");
const apiClient = require("./../../../src/client");

describe("sales/flexpasses", () => {
  const port = process.env.SALES_API_PORT;
  const token = process.env.API_TOKEN;
  const api = apiClient.createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      sales: (baseUrl) => { return `${baseUrl}/sales`; }
    }
  });

  it("should get a redeemable item by id", () => {
    const flexpassId = "5b2cfe091def7f93187a4a2a";

    return api.sales.flexpasses.get({token, flexpassId})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
