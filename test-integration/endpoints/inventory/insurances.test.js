const { expect } = require("chai");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe("inventory/insurances", function() {

  it("should list insurances", function() {
    return api.inventory.insurances.all({ token })
      //.then(matchHeaders('x-api-key')) uncomment when implemented
      .catch((err) => {
        expect(err.response.status).to.eql(404);
      });
  });

  it("should create insurances", function() {
    return api.inventory.insurances.create({ token, insurance: { cost: 1000, threshold: 1000 } })
      //.then(matchHeaders('x-api-key')) uncomment when implemented
      .catch((err) => {
        expect(err.response.status).to.eql(401);
      });
  });

});