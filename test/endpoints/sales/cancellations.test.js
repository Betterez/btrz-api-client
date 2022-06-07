const {axiosMock, expectRequest} = require("../../test-helpers.js");
const apiClient = require("../../../src/client.js");

describe("sales/cancellations", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const api = apiClient.createApiClient({baseURL: "http://test.com"});

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post to create a cancel set", () => {
    axiosMock.onPost("/cancellations").reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.sales.cancellations.sets.create({
      token,
      jwtToken,
      cancelData: {
        fees: [],
        tickets: ["sample 123"],
        giftCertificates: [],
        penalty: {
          amount: 2,
          reason: "you must pay"
        }
      },
      headers: {}
    });
  });

  it("should perform a PUT to create a refund with a cancel set", () => {
    axiosMock.onPut("/cancellations").reply(expectRequest({statusCode: 200, token, jwtToken}));

    return api.sales.cancellations.refunds.create({
      token,
      jwtToken,
      cancelSet: {
        _id: "123",
        cancellation: {
          fees: [],
          tickets: ["sample 123"],
          giftCertificates: []
        },
        signature: "asdasdasdasd"
      },
      headers: {}
    });
  });
});
