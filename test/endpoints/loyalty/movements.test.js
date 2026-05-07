const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("loyalty/programs/:programId/movements", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const programId = "abcf-2659-12sdf-12345";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list movements", () => {
    axiosMock.onGet(`/programs/${programId}/movements`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.loyalty.movements.all({token, jwtToken, programId});
  });

  it("should create a movement", () => {
    axiosMock.onPost(`/programs/${programId}/movements`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.loyalty.movements.create({jwtToken, token, programId, movement: {amount: 1234}});
  });

  it("should get the current balance", () => {
    const customerId = "5beaec044fe897f24b000001";
    axiosMock.onGet(`/programs/${programId}/movements/balance/${customerId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.loyalty.movements.balance.get({token, jwtToken, programId, customerId});
  });
});
