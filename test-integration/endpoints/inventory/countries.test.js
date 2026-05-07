const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("inventory/countries", () => {
  it("should list countries", () => {
    return api.inventory.countries.all({token, query: {isParcel: true}})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
