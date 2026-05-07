const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/gift-certificates", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a gift certificate by GC number", () => {
    const GCNumber = "GC-12345ABCDE";
    axiosMock.onGet(`/gift-certificates/${GCNumber}`).reply(expectRequest({statusCode: 200, token}));
    return api.sales.giftCertificates.get({token, GCNumber});
  });
});
