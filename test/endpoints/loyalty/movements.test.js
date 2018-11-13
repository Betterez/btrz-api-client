const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("loyalty/programs/:programId/movements", () => {
  const token = 'I owe you a token',
    jwtToken = 'I owe you a JWT token',
    programId = "abcf-2659-12sdf-12345";

  afterEach(function() {
    axiosMock.restore();
  });

  it("should list movements", () => {
    axiosMock.onGet(`/programs/${programId}/movements`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.loyalty.movements.all({token, jwtToken, programId});
  });

  it("should create a movement", function() {
    axiosMock.onPost(`/programs/${programId}/movements`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.loyalty.movements.create({ jwtToken, token, programId, movement: { amount: 1234 } });
  });

  it("should get the current balance", () => {
    const customerId = "5beaec044fe897f24b000001";
    axiosMock.onGet(`/programs/${programId}/movements/balance/${customerId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.loyalty.movements.balance.get({token, jwtToken, programId, customerId});
  });
});
