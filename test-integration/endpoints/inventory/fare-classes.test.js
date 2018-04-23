const { expect } = require("chai");
const uuid = require("uuid");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;
const accountId = process.env.ACCOUNT_ID;
const fareClassId = process.env.FARE_CLASS_ID;

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

  it("should get all fare classes", () => {
    return api.inventory.fareClasses.all({token, jwtToken, query: {providerId: accountId}})
      .then((response) => {
        expect(response.data.fareClasses).to.be.instanceOf(Array);
      });
  });

  it("should update a fare class", () => {
    const newName = uuid.v4();

    return api.inventory.fareClasses.update({
      jwtToken,
      token,
      fareClassId,
      update: {
        name: newName
      }
    })
      .then(({status, data}) => {
        expect(status).to.equal(200);
        expect(data.fareClass).to.exist;
        expect(data.fareClass.name).to.eql(newName);
      });
  });
});