const { expect } = require("chai");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe("inventory/parcel-zones", () => {

  it("should list parcel zones", () => {
    return api.inventory.parcelZones.all({ token })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

  it("should create parcel zones", () => {
    return api.inventory.products.all({ token, query: { isParcel: true } }).then((res) => {
      const payload = {
        name: "ParcelZone1",
        productId: res.data.products[0]._id, 
        accountId: res.data.products[0].accountId, 
        provinces: ["Quebec"],
        buckets: []
      };
      return api.inventory.parcelZones.create({ token, jwtToken, parcelZone: payload });
    });
  });

});