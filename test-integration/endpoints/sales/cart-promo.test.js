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

  it("should apply a promo to the cart", function() {
    const cartId = "5b2d3d1c931c8c0d2543c4fb",
      promoCode = "PetPromo",
      query = {
        providerId: "595f9c7007ee12686d000032",
        promoCode
      };

    return apiSales.sales.cartPromo.create({token, jwtToken, cartId, query});
  });

  it("should remove promos from cart", function() {
    const cartId = "5af231ff85d4b8a302d2b343",
      query = {
        channel: "backoffice"
      };

    return apiSales.sales.cartPromo.remove({token, jwtToken, cartId, query});
  });

});