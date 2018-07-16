const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('inventory/gift-certificate-definitions', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should list gift certificate definitions", function() {
    const query = {
      providerId: "providerId1"
    };
    axiosMock.onGet(`/gift-certificate-definitions`).reply(expectRequest({ statusCode: 200, token,  query}));
    return api.inventory.giftCertificateDefinitions.all({ token });
  });

});
