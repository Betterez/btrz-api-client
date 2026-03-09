const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/gift-certificates", () => {
  const token = "test-api-key";
  const jwtToken = "customer-jwt-token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET gift certificates for the given customer", () => {
    const customer = "123-456-789";
    axiosMock.onGet("/gift-certificates")
      .reply(expectRequest({statusCode: 200, token, jwtToken, query: {customer}}));

    return api.operations.giftCertificates.list({
      jwtToken,
      token,
      customer
    });
  });

  it("should GET gift certificates with optional page", () => {
    const customer = "123-456-789";
    const page = 2;
    axiosMock.onGet("/gift-certificates")
      .reply(expectRequest({statusCode: 200, token, jwtToken, query: {customer, page}}));

    return api.operations.giftCertificates.list({
      jwtToken,
      token,
      customer,
      page
    });
  });
});
