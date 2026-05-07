const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("webhooks/undelivered", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list undelivered", () => {
    axiosMock.onGet("/undelivered").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.webhooks.undelivered.all({token, jwtToken});
  });

  it("should get an undelivered by id", () => {
    const id = "undeliveredId";
    axiosMock.onGet(`/undelivered/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.webhooks.undelivered.getById({token, id});
  });

  it("should delete an undelivered by id", () => {
    const id = "undeliveredId";
    axiosMock.onDelete(`/undelivered/${id}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.webhooks.undelivered.deleteById({token, jwtToken, id});
  });

  it("should delete all undelivered webhooks", () => {
    axiosMock.onDelete("/undelivered/batch-all").reply(expectRequest({statusCode: 204, token, jwtToken}));
    return api.webhooks.undelivered.deleteAll({token, jwtToken});
  });

  it("should patch an undelivered", () => {
    axiosMock.onPatch("/undelivered").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.webhooks.undelivered.patch({jwtToken, token, operation: {}});
  });

  it("should resend an undelivered", () => {
    const id = "123123123123";
    axiosMock.onPut(`/undelivered/${id}/retry`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.webhooks.undelivered.resend({jwtToken, token, id});
  });

  it("should resend all the undelivered", () => {
    axiosMock.onPut("/undelivered/retry-all").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.webhooks.undelivered.resendAll({jwtToken, token});
  });
});
