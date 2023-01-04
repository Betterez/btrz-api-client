const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe("inventory/gift-certificate-definitions", () => {
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
    return api.inventory.giftCertificateDefinitions.all({token});
  });

  it("should get a specific gift certificate definition", () => {
    const query = {
      providerId: "providerId1"
    };
    axiosMock.onGet(`/gift-certificate-definitions/${gcDefinitionId}`).reply(expectRequest({statusCode: 200, token, query}));
    return api.inventory.giftCertificateDefinitions.get({token, giftcertificateId: gcDefinitionId});
  });

  it("should create a new gift certificate definition", () => {
    axiosMock.onPost("/gift-certificate-definitions").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    const giftcertificate = {name: "new definition"};
    return api.inventory.giftCertificateDefinitions.create({
      jwtToken,
      token,
      data: {giftcertificate}
    });
  });

  it("should update an existing gift certificate definition", () => {
    axiosMock.onPut(`/gift-certificate-definitions/${gcDefinitionId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    const giftcertificate = {name: "a different definition name"};
    return api.inventory.giftCertificateDefinitions.update({
      jwtToken,
      token,
      data: {giftcertificate},
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
