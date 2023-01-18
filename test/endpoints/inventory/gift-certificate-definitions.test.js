describe("inventory/gift-certificate-definitions", () => {
  const {axiosMock, expectRequest} = require("./../../test-helpers.js");
  const api = require("./../../../src/client.js").createApiClient({
    baseURL: "http://test.com"
  });

  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const gcDefinitionId = "gc-def-1";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list gift certificate definitions", () => {
    const query = {
      providerId: "providerId1"
    };
    axiosMock.onGet("/gift-certificate-definitions").reply(expectRequest({statusCode: 200, token, query}));
    return api.inventory.giftCertificateDefinitions.all({token, query});
  });

  it("should get a specific gift certificate definition", () => {
    const query = {
      providerId: "providerId1"
    };
    axiosMock.onGet(`/gift-certificate-definitions/${gcDefinitionId}`).reply(expectRequest({statusCode: 200, token, query}));
    return api.inventory.giftCertificateDefinitions.get({token, giftcertificateId: gcDefinitionId, query});
  });

  it("should create a new gift certificate definition", () => {
    const giftcertificate = {name: "new definition"};
    axiosMock.onPost("/gift-certificate-definitions").reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {giftcertificate}
    }));
    return api.inventory.giftCertificateDefinitions.create({
      jwtToken,
      token,
      giftcertificate
    });
  });

  it("should update an existing gift certificate definition", () => {
    const giftcertificate = {name: "a different definition name"};
    axiosMock.onPut(`/gift-certificate-definitions/${gcDefinitionId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken, body: {giftcertificate}
    }));
    return api.inventory.giftCertificateDefinitions.update({
      jwtToken,
      token,
      giftcertificate,
      giftcertificateId: gcDefinitionId
    });
  });

  it("should delete an existing gift certificate definition", () => {
    axiosMock.onDelete(`/gift-certificate-definitions/${gcDefinitionId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.giftCertificateDefinitions.remove({
      jwtToken,
      token,
      giftcertificateId: gcDefinitionId
    });
  });
});
