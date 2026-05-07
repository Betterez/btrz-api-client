const assert = require("node:assert/strict");

const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});


describe("sales/gift-certificates", () => {
  it("should not get a GC for a wrong GC number", () => {
    const GCNumber = "thisGCNumberShouldNotExistAnyWherePlease";
    return api.sales.giftCertificates.get({token, GCNumber})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 400);
        assert.deepStrictEqual(err.response.data.code, "WRONG_ID");
        assert.deepStrictEqual(err.response.data.message, "Gift Certificate is not valid");
      });
  });
});
