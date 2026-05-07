const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/transaction", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a transaction by id", () => {
    const transactionId = "transactionId1";
    const providerId = "providerId";
    axiosMock.onGet(`/transaction/${transactionId}?providerId=${providerId}`).reply(expectRequest({statusCode: 200, token}));
    return api.operations.transaction.get({token, id: transactionId, providerId});
  });
});
