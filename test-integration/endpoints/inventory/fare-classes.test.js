const { expect } = require("chai");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});


describe("inventory/fare-classes", () => {

  it("should create a fare class", () => {
    return api.inventory.products.all({ token }).then((res) => {
      return api.inventory.fareClasses.create({
        jwtToken,
        token,
        fareClass: {
          productIds: [res.data.products[0]._id],
          name: "Economy",
          description: "An inexpensive fare class",
          terms: "Tickets are non-refundable",
          changeable: false,
          cancellable: false,
          disabled: false,
          lexiconKeys: {
            name: "fare-class-name-97ba4o9al2837g0w9",
            description: "fare-class-description-97ba4o9al2837g0w9",
            terms: "fare-class-terms-97ba4o9al2837g0w9",
          }
        }
      });
    });
  });
});