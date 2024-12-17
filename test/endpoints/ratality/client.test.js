const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://ratality.com/v2" });

describe("client", () => {
  const jwtToken = 'I owe you a JWT token';
  const version = "v2";

  afterEach(function() {
    axiosMock.restore();
  });

  it("should perform a client create", () => {
    const data = {
      "name": "test_account",
      "externalId": "testAccountId123"
    };
    axiosMock.onPost(`/${version}/client`).reply(expectRequest({statusCode: 200, jwtToken, body: data, withoutApiKey: true}));
    return api.ratality.clients.create({
      jwtToken,
      data
    });
  });

  it("should perform a client get", () => {
    const clientId = "clientId123";
    axiosMock.onGet(`/${version}/client`).reply(expectRequest({statusCode: 200, jwtToken, withoutApiKey: true}));
    return api.ratality.clients.get({
      jwtToken,
      clientId
    });
  });
});
