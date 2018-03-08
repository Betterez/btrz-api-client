const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/promos", () => {

  it("should list promos", () => {
    const query = {channels: "backoffice"};
    return api.inventory.promos.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

  it("should disable promos", () => {
    return api.inventory.promos.remove({ jwtToken, promoId: "55662844183d59b631000003", token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

});
