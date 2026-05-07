
const portSales = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const apiSales = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${portSales}`,
  baseURLOverride: {
    sales: (baseUrl) => { return `${baseUrl}/sales`; }
  }
});

describe("sales/cart", () => {
  it("should apply a promo to the cart", () => {
    const cartId = "5b2d3d1c931c8c0d2543c4fb";
    const promoCode = "PetPromo";
    const query = {
      providerId: "595f9c7007ee12686d000032",
      promoCode
    };

    return apiSales.sales.cartPromo.create({token, jwtToken, cartId, query});
  });

  it("should remove promos from cart", () => {
    const cartId = "5af231ff85d4b8a302d2b343";
    const query = {
      channel: "backoffice"
    };

    return apiSales.sales.cartPromo.remove({token, jwtToken, cartId, query});
  });
});
