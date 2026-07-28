const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/qr-mappings/", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should GET a list of qr mappings", () => {
    axiosMock.onGet("/qr-mappings").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.qrMappings.all({
      token
    });
  });

  it("should GET a list of qr mappings with page query", () => {
    const query = {page: 2};
    axiosMock.onGet("/qr-mappings").reply(expectRequest({
      statusCode: 200,
      token,
      query
    }));
    return api.accounts.qrMappings.all({
      token,
      query
    });
  });

  it("should GET the qr mapping", () => {
    const qrMappingId = "123";
    axiosMock.onGet(`/qr-mappings/${qrMappingId}`)
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.qrMappings.get({token, jwtToken, qrMappingId});
  });

  it("should create qr mapping", () => {
    const data = {name: "mapping", separator: "|", segments: []};
    axiosMock.onPost("/qr-mappings").reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.qrMappings.create({
      jwtToken,
      token,
      data
    });
  });

  it("should update qr mapping", () => {
    const qrMappingId = "123";
    const data = {name: "updated", separator: "-", segments: []};
    axiosMock.onPut(`/qr-mappings/${qrMappingId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.qrMappings.update({
      jwtToken,
      qrMappingId,
      token,
      data
    });
  });

  it("should delete qr mapping", () => {
    const qrMappingId = "123";
    axiosMock.onDelete(`/qr-mappings/${qrMappingId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.qrMappings.remove({
      jwtToken,
      qrMappingId,
      token
    });
  });
});
