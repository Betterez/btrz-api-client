const { expect } = require("chai");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../index");

const client = api.createClient({ 
  baseURL: `http://localhost`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}:${port}`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe("inventory/insurances", function() {

  it("should list insurances", function() {
    return client.inventory.insurances.all({ token })
      //.then(matchHeaders('x-api-key')) uncomment when implemented
      .catch((err) => {
        expect(err.response.status).to.eql(404);
      });
  });

});