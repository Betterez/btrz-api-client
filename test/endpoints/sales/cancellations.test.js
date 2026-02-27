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

  it("should PUT to update (complete) a pending payment for a cancellation transaction", () => {
    const pendingTransactionId = "507f1f77bcf86cd799439011";
    const paymentResult = {
      provider: "prisma",
      type: "prisma_terminal",
      referenceNumber: "ref1",
      result: {id: "1", paymentStatus: "CONFIRMED"},
      createdAt: {},
      displayName: "Prisma Terminal",
      status: "refunded",
      amount: 10.5
    };
    axiosMock.onPut(`/cancellations/${pendingTransactionId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: {paymentResult}
    }));

    return api.sales.cancellations.update({
      token,
      jwtToken,
      pendingTransactionId,
      paymentResult,
      headers: {}
    });
  });
});
