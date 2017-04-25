const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../index").createApiClient({ baseURL: `http://localhost:${port}`, });

const { matchHeaders } = require("./../test-integration-helpers");

describe("clean client", function() {

  it("should list products using clean client", function() {
    return api._cleanClient({ url: `/inventory/products`, headers: { 'x-api-key': token }, params: { isParcel: true } })
      .then(matchHeaders('x-api-key'))
  });

});
  
  