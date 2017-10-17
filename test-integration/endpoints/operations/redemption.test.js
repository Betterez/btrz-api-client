const { expect } = require("chai");

const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    operations: (baseUrl) => `${baseUrl}/operations`
  }
});

describe("operations/redemptions", function() {

  it("should create a redemption for the parcel", function() {
    const redemption = {
      "itemCode": "PA-59e60182bc6ef25a2cfd6b6f",
      "options": {
        "locationData": {
          "latitude": "-34.6108168",
          "longitude": "-58.4801285"
        },
        "operationType": "received"
      },
      "redemptions": {
          "items": [],
          "scannedPurchases": [],
          "externalPasses": []
      }
    };
    return api.operations.redemption.create({ token, jwtToken, redemption });
  });

});
