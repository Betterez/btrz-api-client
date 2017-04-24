const { expect } = require("chai");
const { createClient } = require("./../src/client");

function expectKnownEndpoints(api) {
  expect(api.inventory.products).to.exists;
  expect(api.inventory.insurances).to.exists;
}

describe("client", function() {

  describe("defaults()", function() {
    const baseURL = "http://someUrl.com"

    it("should create a client with production values if no default provided", function() {
      const api = createClient();

      expectKnownEndpoints(api);
      expect(api.inventory.__test.client.defaults.baseURL).to.eql("http://betterez.com/inventory");
      expect(api.inventory.__test.client.defaults.timeout).to.eql(15000);
    });

    it("should create a client with default values", function() {
      const api = createClient({ baseURL });

      expectKnownEndpoints(api);
      expect(api.inventory.__test.client.defaults.baseURL).to.eql(baseURL);
      expect(api.inventory.__test.client.defaults.timeout).to.eql(0);
    });


    it("should allow to override baseUrl for custom endpoints", function() {
      const api = createClient({ baseURL, timeout: 10, baseURLOverride: { inventory: (url) => `${url}/somePath` } });
      expect(api.inventory.products).to.exists;
      expect(api.inventory.insurances).to.exists;

      expectKnownEndpoints(api);
      expect(api.inventory.__test.client.defaults.baseURL).to.eql(`${baseURL}/somePath`);
      expect(api.inventory.__test.client.defaults.timeout).to.eql(10);
    });

  });

})