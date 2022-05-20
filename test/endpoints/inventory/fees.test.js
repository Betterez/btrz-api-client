const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/fees', function() {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should list fees", function() {
    axiosMock.onGet(`/fees`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fees.all({ token });
  });

  it("should get a fee by id", function() {
    const feeId = "feeId1";
    axiosMock.onGet(`/fees/${feeId}`).reply(expectRequest({ statusCode: 200, token }));
    return api.inventory.fees.get({ token, feeId });
  });

  it("should create a fee", () => {
    axiosMock.onPost("/fees").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fees.create({
      jwtToken,
      token,
      data: {
        name: "fee",
      }
    });
  });

  it("should update a fee", () => {
    const feeId = "123123123123";
    const data = {
      name: "newFee",
    };
    axiosMock.onPut(`/fees/${feeId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.fees.update({jwtToken, token, feeId, data});
  });

});