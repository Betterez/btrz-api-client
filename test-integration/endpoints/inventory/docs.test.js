describe("inventory/docs", () => {
  const assert = require("node:assert/strict");
  const port = process.env.INVENTORY_API_PORT;

  const api = require("./../../../src/client.js").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
    }
  });
  it("should get the docs", () => {
    return api.inventory.docs.get({})
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        console.log(data);
        assert.ok(data);
      });
  });
});
