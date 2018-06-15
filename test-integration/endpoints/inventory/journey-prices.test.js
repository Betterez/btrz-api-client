const { expect } = require("chai");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const accountId = process.env.ACCOUNT_ID;
const journeyPriceId = process.env.JOURNEY_PRICE_ID;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});


describe("inventory/journey-prices", () => {
  it("should get all journey prices that match the provided query", () => {
    return api.inventory.journeyPrices.all({token, jwtToken, query: {providerIds: accountId}})
      .then(({status, data}) => {
        expect(status).to.eql(200);
        expect(data.journeyPrices).to.be.an.instanceOf(Array);
      });
  });

  it("should delete the journey price with the specified ID", () => {
    return api.inventory.journeyPrices.deleteById({token, jwtToken, id: journeyPriceId})
      .then(({status, data}) => {
        expect(status).to.eql(204);
      });
  });
});