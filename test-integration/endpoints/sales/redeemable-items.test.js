const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;
const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});

describe("sales/redeemable-items", () => {
  it("should get a redeemable item by id", () => {
    const redeemableItemId = "5b2cfe091def7f93187a4a2a";
    const query = {
      providerId: "595f9c7007ee12686d000032"
    };
    return api.sales.redeemableItems.get({token, redeemableItemId, query})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
