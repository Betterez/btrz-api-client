const {axiosMock, expectRequest} = require("./../../test-helpers");
const apiClient = require("./../../../src/client");

describe("sales/check-in", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const api = apiClient.createApiClient({baseURL: "http://test.com"});

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a checkIn by id", () => {
    const checkInId = "12345ABCDE";

    axiosMock.onGet(`/check-in/${checkInId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.sales.checkInInfo.get({token, jwtToken, id: checkInId});
  });
});