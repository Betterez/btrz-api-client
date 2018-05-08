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

describe.only("sales/cart", function() {

  it("should apply a promo to the cart", function() {
    const cartId = "5af231ff85d4b8a302d2b343",
      promoCode = "WinterPromo",
      query = {
        providerId: "595f9c7007ee12686d000032"
      };

    return apiSales.sales.cartPromo.create({token, jwtToken, cartId, promoCode, query});
  });

});