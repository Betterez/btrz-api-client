const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("sales/custom-fields", () => {
  it("should list the custom fields", () => {
    return api.sales.customFields.all({token})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
