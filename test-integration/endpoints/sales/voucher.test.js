const { expect } = require("chai");

const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    sales: (baseUrl) => `${baseUrl}/sales`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe("sales/voucher", function() {
  it("should get a voucher", function() {
    const voucher = {
      number: "VC-L2AVT4GM",
      firstName: "lucas",
      lastName: "ferraro",
      cartId: "59b2e67c76e5b7b30b5151f0"
    };
    return api.sales.voucher.get({ token, voucher })
      .then((response) => {
        expect(response.data).to.exist;
        expect(response.data.internalId).to.be.eql("VC-L2AVT4GM");
        expect(response.data.balance).to.be.eql(3000000);
      })
  });
});