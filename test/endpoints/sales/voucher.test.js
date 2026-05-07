const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("sales/voucher", () => {
  const token = "I owe you a token";
  let voucher = null;

  beforeEach(() => {
    voucher = {
      number: "1234",
      firstName: "joe",
      lastName: "joe",
      cartId: "9876"
    };
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a voucher", () => {
    axiosMock
      .onGet(`/vouchers/${voucher.number}?cartId=${voucher.cartId}` +
        `&firstName=${voucher.firstName}&lastName=${voucher.lastName}&displayCurrencyCode=`)
      .reply(
        expectRequest({statusCode: 200, token})
      );
    return api.sales.voucher.get({token, voucher});
  });

  it("should get a voucher with displayCurrencyCode", () => {
    voucher.displayCurrencyCode = "GBP";
    axiosMock
      .onGet(`/vouchers/${voucher.number}?cartId=${voucher.cartId}` +
        `&firstName=${voucher.firstName}&lastName=${voucher.lastName}&displayCurrencyCode=GBP`)
      .reply(
        expectRequest({statusCode: 200, token})
      );
    return api.sales.voucher.get({token, voucher});
  });
});
