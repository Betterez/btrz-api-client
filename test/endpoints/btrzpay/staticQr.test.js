const assert = require("node:assert/strict");
const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("btrzpay/staticQr", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the Busplus static QR image of the logged-in user", async () => {
    const qrImage = {imagen: "data:image/png;base64,AAAA", posId: "123"};
    axiosMock.onGet("/static-qr/busplus/qr-image").reply((config) => {
      const [statusCode] = expectRequest({
        statusCode: 200, token, jwtToken, requireJwtTokenOnGet: true, query: {}
      })(config);

      return [statusCode, qrImage];
    });

    const response = await api.btrzpay.staticQr.busplus.qrImages.get({token, jwtToken});

    assert.deepStrictEqual(response.data, qrImage);
  });

  it("should confirm a pending static QR payment of a transaction with the QR provider", async () => {
    const transactionId = "6745f1a2b3c4d5e6f7a8b9c0";
    const body = {user: "Ana Perez", createdDateTime: "2026-11-24 10:30"};
    axiosMock.onPost(`/static-qr/transactions/${transactionId}/confirm-payment`).reply((config) => {
      const [statusCode] = expectRequest({statusCode: 200, token, jwtToken, body})(config);

      return [statusCode, {}];
    });

    const response = await api.btrzpay.staticQr.confirmPayment({
      token, jwtToken, transactionId, user: body.user, createdDateTime: body.createdDateTime
    });

    assert.equal(response.status, 200);
    assert.deepStrictEqual(response.data, {});
  });
});
