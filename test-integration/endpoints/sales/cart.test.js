const assert = require("node:assert/strict");
const {randomUUID} = require("node:crypto");

const portSales = process.env.SALES_API_PORT;
const portInventory = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const apiSales = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${portSales}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});

const apiInventory = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${portInventory}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});

describe("sales/cart", () => {
  it("should not get a cart that does not exist", () => {
    const cartId = "thisCartIdShouldNotExistAnyWherePlease";
    return apiSales.sales.cart.get({token, id: cartId})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 400);
        assert.deepStrictEqual(err.response.data.code, "WRONG_CART_ID");
        assert.deepStrictEqual(err.response.data.message, "CartId is not valid");
      });
  });

  it("should create a cart", () => {
    const fetchProducts = apiInventory.inventory.products.all({token, query: {isParcel: true}});
    const fetchStations = apiInventory.inventory.stations.all({token});
    const fetchFares = apiInventory.inventory.fares.all({token});

    Promise.all([fetchProducts, fetchStations, fetchFares])
      .then(([resProducts, resStations, resFares]) => {
        const cart = {
          operationId: randomUUID(),
          items: {
            parcel: [{
              productId: resProducts.data.products[0]._id,
              declaredValue: 250000,
              applyInsurance: true,
              from: {
                _id: resStations.data.stations[0]._id
              },
              to: {
                _id: resStations.data.stations[1]._id
              },
              parcels: [
                {weight: 10, fareId: resFares.data.fares[0]._id},
                {weight: 20, fareId: resFares.data.fares[0]._id}
              ]
            }]
          }
        };
        return apiSales.sales.cart.create({token, jwtToken, cart});
      });
  });

  it("should update a cart", () => {
    const cartId = "5bf579620ac672a52db14a88";
    const data = {
      providerId: "595f9c7007ee12686d000032",
      operations: [{op: "overrideFees"}]
    };
    return apiSales.sales.cart.patch({token, jwtToken, cartId, data});
  });
});
