describe("inventory/docs", () => {
  const {
    expect
  } = require("chai");
  const port = process.env.INVENTORY_API_PORT;

  const api = require("./../../../src/client").createApiClient({
    baseURL: `http://localhost:${port}`,
    baseURLOverride: {
      inventory: (baseUrl) => `${baseUrl}/inventory`
    }
  });
  it("should get the docs", () => {
    return api.inventory.docs.get({})
      .then(({status, data}) => {
        expect(status).to.equal(200);
        console.log(data);
        expect(data).to.exist;
      });
  });
});
