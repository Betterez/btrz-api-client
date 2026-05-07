const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("inventory/fees", () => {
  it("should list fees", () => {
    const query = {rules: "manual"};
    return api.inventory.fees.all({token, query})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
