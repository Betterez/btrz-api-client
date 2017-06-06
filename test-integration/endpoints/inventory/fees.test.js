const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/fees", () => {

  it("should list fees", () => {
    const query = {rules: "manual"};
    return api.inventory.fees.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

});