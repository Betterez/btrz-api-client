const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    sales: (baseUrl) => `${baseUrl}/sales`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("sales/payment-providers", () => {

  it("should list the enabled payment providers", () => {
    const query = {
      enabled: true
    };
    return api.sales.paymentProviders.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

});
