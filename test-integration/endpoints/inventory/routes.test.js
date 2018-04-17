const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/routes", function() {

  it("should get route by id", function() {
    return api.inventory.routes.get({token, routeId: "5a61f8e366d8da4c42000037"})
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});
