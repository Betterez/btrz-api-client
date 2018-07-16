const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe.only("inventory/gift-certificate-definitions", () => {

  it("should list gift certificate definitions for the given provider id", () => {
    const query = {
      providerId: "595f9c7007ee12686d000032"
    };
    return api.inventory.giftCertificateDefinitions.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});
