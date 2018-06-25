const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/fares", () => {

  it("should list fares", () => {
    return api.inventory.fares.all({ token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

  it("should get a fare by id", () => {
    const id = "595f9f62df9127b11d5e03bd";
    return api.inventory.fares.get({ token, id })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});
