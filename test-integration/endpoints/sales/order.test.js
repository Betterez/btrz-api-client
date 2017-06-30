const { expect } = require("chai"),
  uuid = require("uuid");

const portSales = process.env.SALES_API_PORT;
const portInventory = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const apiSales = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${portSales}`, 
  baseURLOverride: {
    sales: (baseUrl) => `${baseUrl}/sales`
  }
});

const apiInventory = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${portInventory}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});


const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe("sales/order", function() {

  function loadCart() {
    let productId, fromId, toId, fareId;

    const fetchProducts = apiInventory.inventory.products.all({ token, query: { isParcel: true } }),
      fetchStations = apiInventory.inventory.stations.all({ token}),
      fetchFares = apiInventory.inventory.fares.all({ token });

    return Promise.all([fetchProducts, fetchStations, fetchFares])
      .then(([resProducts, resStations, resFares]) => {
        const cart = {
            operationId: uuid.v4(),
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

  it("should not get an order that does not exist", function() {
    const orderId = "thisOrderIdShouldNotExistAnyWherePlease";
    return apiSales.sales.order.get({ token, orderId })
      .catch((err) => {
        expect(err).to.exist;
        expect(err.response.status).to.be.eql(400);
        expect(err.response.data.code).to.be.eql('WRONG_ORDER_ID');
        expect(err.response.data.message).to.be.eql('OrderID is not valid');
      })
  });

  it.skip("should create an order", function() {
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
      })

  });

});