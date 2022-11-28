const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
// eslint-disable-next-line import/extensions
const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => {
      return `${baseUrl}/inventory`;
    }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers");

describe("inventory/custom-fields", () => {
  it("should list custom fields", () => {
    return api.inventory.customFields.all({token})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });

  it("should get the custom field specified", () => {
    return api.inventory.customFields.all({token})
      .then((response) => {
        if (response.data.customfields && response.data.customfields.length > 0) {
          return api.inventory.customFields.get({token, fieldId: response.data.customfields[0].internalId})
            .then(matchHeaders("x-api-key"))
            .then(statusCode(200));
        }
        throw new Error("No custom field was found");
      });
  });
});
