const {axiosMock} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("notifications/notify-tickets", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post send an email with ticket", () => {
    const query = {
      lang: "en"
    };
    const ticketId = "XHC";
    axiosMock.onPost(`/notify-tickets/${ticketId}`).reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });
    return api.notifications.notify.tickets.create({
      token,
      jwtToken,
      query,
      operation: "movement",
      to: "info@betterez.com",
      ticketId
    });
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
    return api.notifications.notify.vouchers.create({
      token,
      jwtToken,
      query,
      data: {
        voucherIds: []
      }
    });
  });
});
