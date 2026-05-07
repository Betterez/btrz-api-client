const assert = require("node:assert/strict");

const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});


describe("sales/voucher", () => {
  it("should get a voucher", () => {
    const voucher = {
      number: "VC-L2AVT4GM",
      firstName: "lucas",
      lastName: "ferraro",
      cartId: "59b2e67c76e5b7b30b5151f0"
    };
    return api.sales.voucher.get({token, voucher})
      .then((response) => {
        assert.ok(response.data);
        assert.deepStrictEqual(response.data.internalId, "VC-L2AVT4GM");
        assert.deepStrictEqual(response.data.balance, 3000000);
      });
  });
});
