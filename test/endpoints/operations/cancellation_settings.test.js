const {expect} = require("chai");
const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("operations/cancellation-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET cancellation settings", () => {
    axiosMock.onGet("/cancellation-settings").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.operations.cancellationSettings.get({
      token,
      jwtToken
    });
  });

  it("should PUT (update) cancellation settings", () => {
    const data = {
      cancellationWindowMinutes: 60,
      allowCancellationAfterDeparture: false
    };
    axiosMock.onPut("/cancellation-settings").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.operations.cancellationSettings.update({
      token,
      jwtToken,
      data
    });
  });

  it("should send the request body when updating cancellation settings", async () => {
    const data = {
      cancellationWindowMinutes: 120,
      allowCancellationAfterDeparture: true
    };
    axiosMock.onPut("/cancellation-settings").reply((config) => {
      expect(JSON.parse(config.data)).to.eql(data);
      return [200, {}];
    });
    const response = await api.operations.cancellationSettings.update({
      token,
      jwtToken,
      data
    });
    return response;
  });
});
