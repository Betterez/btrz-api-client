
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});


describe("inventory/insurances", () => {
  it("should list insurances", () => {
    return api.inventory.insurances.all({token});
  });

  it("should list insurances by productId", () => {
    return api.inventory.products.all({token, query: {isParcel: true}}).then((res) => {
      const query = {
        productId: res.data.products[0]._id
      };
      return api.inventory.insurances.all({token, query});
    });
  });

  it("should create insurances", () => {
    return api.inventory.products.all({token, query: {isParcel: true}}).then((res) => {
      return api.inventory.insurances.create({
        token,
        jwtToken,
        insurance: {
          productId: res.data.products[0]._id,
          cost: 1000,
          threshold: 1000,
          enabled: true
        }
      });
    });
  });

  it("should update insurance", () => {
    return api.inventory.products.all({token, query: {isParcel: true}}).then((res) => {
      return api.inventory.insurances.create({
        token,
        jwtToken,
        insurance: {
          productId: res.data.products[0]._id,
          cost: 1000,
          threshold: 1000,
          enabled: true
        }
      }).then((created) => {
        const insurance = created.data.insurance;
        insurance.enabled = false;
        return api.inventory.insurances.enabled({token, insurance, jwtToken});
      });
    });
  });
});
