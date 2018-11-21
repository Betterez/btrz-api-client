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

describe("sales/cart", function() {

  it("should not get a cart that does not exist", function() {
    const cartId = "thisCartIdShouldNotExistAnyWherePlease";
    return apiSales.sales.cart.get({ token, id: cartId })
      .catch((err) => {
        expect(err).to.exist;
        expect(err.response.status).to.be.eql(400);
        expect(err.response.data.code).to.be.eql('WRONG_CART_ID');
        expect(err.response.data.message).to.be.eql('CartId is not valid');
      })
  });

  it("should create a cart", function() {    
    let productId, fromId, toId, fareId;

    const fetchProducts = apiInventory.inventory.products.all({ token, query: { isParcel: true } }),
      fetchStations = apiInventory.inventory.stations.all({ token}),
      fetchFares = apiInventory.inventory.fares.all({ token });

    Promise.all([fetchProducts, fetchStations, fetchFares])
      .then(([resProducts, resStations, resFares]) => {
        const cart = {
            operationId: uuid.v4(),
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

  it("should update a cart", function() {
    const cartId = "5bf579620ac672a52db14a88",
      data = {
        providerId: "595f9c7007ee12686d000032",
        operations: [{op: "overrideFees"}]
      };
    return apiSales.sales.cart.patch({token, jwtToken, cartId, data});
  });
});
