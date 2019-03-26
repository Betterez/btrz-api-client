const {axiosMock, expectRequest} = require("./../../test-helpers");
const apiClient = require("./../../../src/client");

describe("sales/flexpasses", () => {
  const token = "I owe you a token";
  const api = apiClient.createApiClient({baseURL: "http://test.com"});

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a flexpass by id", () => {
    const flexpassId = "12345ABCDE";

    axiosMock.onGet(`/flexpasses/${flexpassId}`).reply(expectRequest({statusCode: 200, token}));

    return api.sales.flexpasses.get({token, flexpassId});
  });
});
