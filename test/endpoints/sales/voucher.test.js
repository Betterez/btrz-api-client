const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('sales/voucher', function() {
  const token = 'I owe you a token';

  beforeEach(function() {
  voucher = {
      number: "1234",
      firstName: "joe",
      lastName: "joe",
      cartId: "9876"
    };
  });

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get a voucher", function() {
    axiosMock
      .onGet(`/vouchers/${voucher.number}?cartId=${voucher.cartId}&firstName=${voucher.firstName}&lastName=${voucher.lastName}&displayCurrencyCode=`)
      .reply(
        expectRequest({ statusCode: 200, token })
      );
    return api.sales.voucher.get({ token, voucher });
  });

  it("should get a voucher with displayCurrencyCode", function() {
    voucher.displayCurrencyCode = "GBP";
    axiosMock
      .onGet(`/vouchers/${voucher.number}?cartId=${voucher.cartId}&firstName=${voucher.firstName}&lastName=${voucher.lastName}&displayCurrencyCode=GBP`)
      .reply(
        expectRequest({ statusCode: 200, token })
      );
    return api.sales.voucher.get({ token, voucher });
  });
});