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

    const response = await api.btrzpay.staticQr.getQrImage({token, jwtToken});

    assert.deepStrictEqual(response.data, qrImage);
  });
});
