const port = process.env.SALES_API_PORT,
  token = process.env.API_TOKEN,
  { matchHeaders, statusCode } = require("./../../test-integration-helpers"),
  api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      sales: (baseUrl) => `${baseUrl}/sales`
    }
  });

describe.only("sales/redeemable-items", function() {

  it("should get a redeemable item by id", function() {
    const redeemableItemId = "5b2cfe091def7f93187a4a2a",
      query = {
        providerId: "595f9c7007ee12686d000032"
      };
    return api.sales.redeemableItems.get({ token, redeemableItemId, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});
