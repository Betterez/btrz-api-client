const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});

const {matchHeaders, statusCode} = require("./../../test-integration-helpers.js");

describe("sales/payment-providers", () => {
  it("should list the enabled payment providers", () => {
    const query = {
      enabled: true
    };
    return api.sales.paymentProviders.all({token, query})
      .then(matchHeaders("x-api-key"))
      .then(statusCode(200));
  });
});
