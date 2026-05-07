const assert = require("node:assert/strict");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const accountId = process.env.ACCOUNT_ID;
const journeyPriceId = process.env.JOURNEY_PRICE_ID;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});


describe("inventory/journey-prices", () => {
  it("should get all journey prices that match the provided query", () => {
    return api.inventory.journeyPrices.all({token, jwtToken, query: {providerIds: accountId}})
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(Array.isArray(data.journeyPrices));
      });
  });

  it("should get journey price by id", () => {
    return api.inventory.journeyPrices.get({id: journeyPriceId, token, jwtToken})
      .then(({status, data}) => {
        assert.deepStrictEqual(status, 200);
        assert.ok(Array.isArray(data.journeyPrices));
        assert.deepStrictEqual(data.journeyPrices[0].id, journeyPriceId);
      });
  });


  it("should delete the journey price with the specified ID", () => {
    return api.inventory.journeyPrices.deleteById({token, jwtToken, id: journeyPriceId})
      .then(({status}) => {
        assert.deepStrictEqual(status, 204);
      });
  });
});
