const {expect} = require("chai");
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

describe("notifications/notify-child-user", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post send an email with child user created", () => {
    axiosMock.onPost("/notify-child-user").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });

    return api.notifications.notify.childUsers.create({
      token,
      jwtToken,
      email: "test@betterez.com",
      lang: "en"
    });
  });
});

describe("notifications/notify-manifest", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should post a notification for manifest", () => {
    axiosMock.onPost("/notify-manifest").reply(({headers}) => {
      if (headers["x-api-key"] === token && headers.authorization === `Bearer ${jwtToken}`) {
        return [200];
      }
      return [403];
    });

    return api.notifications.notify.manifest.create({
      token,
      jwtToken,
      data: {},
      headers: {}
    });
  });
});

describe("notifications/notify/email", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST send email by type and itemId", () => {
    axiosMock.onPost("/notify/email").reply(({headers, data}) => {
      if (headers["x-api-key"] !== token || headers.authorization !== `Bearer ${jwtToken}`) {
        return [403];
      }
      const body = typeof data === "string" ? JSON.parse(data) : data;
      if (body.type === "voucher" && body.itemId === "507f1f77bcf86cd799439011") {
        return [200, {success: true}];
      }
      return [400];
    });
    return api.notifications.notify.emailByType.create({
      token,
      jwtToken,
      data: {
        type: "voucher",
        itemId: "507f1f77bcf86cd799439011"
      }
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.data.success).to.equal(true);
    });
  });
});

describe("notifications/notify/sms", () => {
  const token = "my-api-key";
  const jwtToken = "my-jwt";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST send SMS by type and itemId", () => {
    axiosMock.onPost("/notify/sms").reply(({headers, data}) => {
      if (headers["x-api-key"] !== token || headers.authorization !== `Bearer ${jwtToken}`) {
        return [403];
      }
      const body = typeof data === "string" ? JSON.parse(data) : data;
      if (body.type === "order" && body.itemId === "507f1f77bcf86cd799439011") {
        return [200, {success: true}];
      }
      return [400];
    });
    return api.notifications.notify.smsByType.create({
      token,
      jwtToken,
      data: {
        type: "order",
        itemId: "507f1f77bcf86cd799439011"
      }
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.data.success).to.equal(true);
    });
  });
});
