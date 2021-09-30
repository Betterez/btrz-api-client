const {expect} = require("chai");
const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/exchange-rates", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of USD currency exchangeRates", () => {
    const isoCode = "USD";
    axiosMock.onGet(`/exchange-rates/${isoCode}`).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.exchangeRates.allByIsoCode({
      token,
      jwtToken,
      isoCode
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should POST a ExchangeRate", () => {
    const data = {
      accountId: "123456789"
    };
    axiosMock.onPost("/exchange-rates").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.exchangeRates.create({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
