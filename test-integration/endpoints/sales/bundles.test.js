const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    sales: (baseUrl) => `${baseUrl}/sales`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("sales/bundles", () => {
  it("should list bundles", () => {
    const query = {
      providerId: "595f9c7007ee12686d000032",
      type: "bundles"
    };
    return api.sales.bundles.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });
});
