const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("inventory/bundle-fares", () => {
  it("should list fares for a bundle", () => {
    const bundleId = "5b20472fd6d9c17d3b000007";
    const productId = "595f9c7007ee12686d000033";
    const query = {
      providerIds: "595f9c7007ee12686d000032"
    };
    return api.inventory.bundleFares.all({token, bundleId, productId, query})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
