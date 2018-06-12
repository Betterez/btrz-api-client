const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/companies", function() {

  it("should list companies", function() {
    return api.inventory.companies.all({ token, query: { search: "sup" } })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
      .then((res) => {
        console.log(res.data);
      });
  });
});
