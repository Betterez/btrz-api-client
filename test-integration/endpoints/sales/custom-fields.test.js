const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    sales: (baseUrl) => `${baseUrl}/sales`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("sales/custom-fields", () => {

  it("should list the custom fields", () => {    
    return api.sales.customFields.all({ token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

});
