const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("operations/redemptions", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a redemption", () => {
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
    axiosMock.onPost("/redemptions").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.redemption.create({jwtToken, token, redemption});
  });

  it("should validate a redemption", () => {
    const passId = "abc123";
    const timezone = "America/Toronto";
    axiosMock.onGet(`/redemptions/validate/${passId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.redemption.getValidate({jwtToken, token, passId, timezone});
  });
  it("should unredeem a ticket", () => {
    const unredeemData = {
      "ticketId": "62a0dfb205a95168ddba5364"
    };
    axiosMock.onPost("/unredeem").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.redemption.unredeem({jwtToken, token, unredeemData});
  });
});
