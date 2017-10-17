const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/redemptions', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should create a redemption", function() {
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
    axiosMock.onPost(`/redemptions`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.operations.redemption.create({ jwtToken, token, redemption });
  });

}); 
