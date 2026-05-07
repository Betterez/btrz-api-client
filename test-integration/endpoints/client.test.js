const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../src/client.js").createApiClient({baseURL: `http://localhost:${port}`});

const {matchHeaders} = require("./../test-integration-helpers.js");

describe("clean client", () => {
  it("should list products using clean client", () => {
    return api._cleanClient({url: "/inventory/products", headers: {"x-api-key": token}, params: {isParcel: true}})
      .then(matchHeaders("x-api-key"));
  });
});
