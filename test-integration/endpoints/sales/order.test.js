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

describe("sales/order", () => {
  function loadCart() {
    const fetchProducts = apiInventory.inventory.products.all({token, query: {isParcel: true}});
    const fetchStations = apiInventory.inventory.stations.all({token});
    const fetchFares = apiInventory.inventory.fares.all({token});

    return Promise.all([fetchProducts, fetchStations, fetchFares])
      .then(([_resProducts, _resStations, _resFares]) => {
        const cart = {
          operationId: randomUUID(),
          items: {
            parcel: [{
              productId: "590c7009e425b05b36373b66",
              declaredValue: 250000,
              applyInsurance: true,
              from: {
                _id: "5819f48c7e39ec3a1a2a5fbc"
              },
              to: {
                _id: "5819f4967e39ec3a1a2a5fbd"
              },
              parcels: [
                {weight: {unit: "gr", value: 10}, fareId: "593569302d0ec8c976890fa4"},
                {weight: {unit: "gr", value: 20}, fareId: "593569302d0ec8c976890fa4"}
              ]
            }]
          }
        };
        return apiSales.sales.cart.create({token, jwtToken, cart});
      });
  }

  it("should not get an order that does not exist", () => {
    const orderId = "thisOrderIdShouldNotExistAnyWherePlease";
    return apiSales.sales.order.get({token, orderId})
      .catch((err) => {
        assert.ok(err);
        assert.deepStrictEqual(err.response.status, 400);
        assert.deepStrictEqual(err.response.data.code, "WRONG_ORDER_ID");
        assert.deepStrictEqual(err.response.data.message, "OrderID is not valid");
      });
  });

  it.skip("should create an order", () => {
    const order = {
      cartId: null,
      payments: [
        {
          method: "online_credit",
          amount: 502,
          ccnumber: "4111-1111-1111 1111",
          authorization: "655",
          expiryMonth: 3,
          expiryYear: 2029,
          description: "paying!"
        }
      ],
      customerInfo: {
        firstName: "first a",
        lastName: "surname",
        email: "user@comp.any",
        phone: "123 5555 6666",
        street: "fake 123",
        city: "LA",
        province: "Cali",
        zip: "888"
      },
      customFields: []
    };

    loadCart()
      .then((cart) => {
        order.cartId = cart.data.cartId;
        return apiSales.sales.order.create({token, jwtToken, order});
      });
  });
});
