const {axiosMock} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/notify-vouchers", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post send an email with voucher", () => {
    const query = {
      lang: "en"
    };
    axiosMock.onPost("/notify-vouchers").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    return api.notifications.notifyVoucher.create({
      token,
      jwtToken,
      query,
      data: {
        voucherIds: []
      }
    });
  });
});
