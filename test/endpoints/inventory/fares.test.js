const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/fares', function() {
  const token = 'I owe you a token';
  const jwtToken = "I owe you a JWT token";

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list fares", function() {
    axiosMock.onGet(`/fares`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fares.all({ token });
  });

  it("should get a fare by id", function() {
    const id = "fareId1";
    axiosMock.onGet(`/fare/${id}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fares.get({ token, id });
  });

  it("should create a fare", () => {
    const fare = {
      name: "newFare",
    };

    axiosMock.onPost("/fares").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fares.create({
      jwtToken,
      token,
      fare
    });
  });

  it("should update a fare", () => {
    const fareId = "123123123123";
    const fare = {
      name: "newFare",
    };
    axiosMock.onPut(`/fare/${fareId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fares.update({jwtToken, token, fareId, fare});
  });

  it("should create an adjustment", () => {
    const fareId = "123123123123";
    const adjustmentsOverride = {
      name: "newAdjustment",
    };

    axiosMock.onPost(`/fares/${fareId}/adjustments-overrides`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fares.adjustments.create({
      jwtToken,
      token,
      fareId,
      adjustmentsOverride
    });
  });

  it("should remove an adjustment", () => {
    const fareId = "123123123123";
    const adjustmentId = "454545454545";

    axiosMock.onDelete(`/fares/${fareId}/adjustments-overrides/${adjustmentId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fares.adjustments.remove({
      jwtToken,
      token,
      fareId,
      adjustmentId
    });
  });


});
