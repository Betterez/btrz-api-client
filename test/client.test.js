const { expect } = require("chai");
const MockAdapter = require('axios-mock-adapter');

const { createApiClient } = require("./../src/client");

function expectKnownEndpoints(api) {
  expect(api.inventory.products).to.exists;
  expect(api.inventory.insurances).to.exists;
  expect(api.inventory.trips).to.exists;
}

describe("client", function() {
  const baseURL = "http://someUrl.com"

  it("should create a client with production values if no default provided", function() {
    const api = createApiClient();

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql("http://betterez.com/inventory");
    expect(api.inventory.__test.client.defaults.timeout).to.eql(15000);
  });

  it("should create a client with default values", function() {
    const api = createApiClient({ baseURL });

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql(baseURL);
    expect(api.inventory.__test.client.defaults.timeout).to.eql(0);
  });

  it("should create a client that uses the provided default request headers when making a request to any subsystem", () => {
    const api = createApiClient({headers: {"x-test-header": "some_value"}});

    const ignoredApiProperties = ["constants", "_cleanClient"];
    const propertyIsRelevant = (property) => !ignoredApiProperties.includes(property);
    for (const subsystem of Object.keys(api).filter(propertyIsRelevant)) {
      expect(api[subsystem].__test.client.defaults.headers).to.include({"x-test-header": "some_value"});
    }
  });

  it("should expose a INTERNAL_AUTH_TOKEN constant", () => {
    const api = createApiClient({ baseURL });
    expect(api.constants.INTERNAL_AUTH_TOKEN_SYMBOL).to.be.eql("internal_auth_token");
  });

  it("should allow to override baseUrl for custom endpoints", function() {
    const api = createApiClient({ baseURL, timeout: 10, baseURLOverride: { inventory: (url) => `${url}/somePath` } });
    expect(api.inventory.products).to.exists;
    expect(api.inventory.insurances).to.exists;

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql(`${baseURL}/somePath`);
    expect(api.inventory.__test.client.defaults.timeout).to.eql(10);
  });

  it("should allow a different baseUrl to be specified for trip search endpoints", () => {
    const api = createApiClient({ baseURL, timeout: 10, baseURLOverride: {
      inventory: () => "http://localhost:3010/inventory",
      trips: () => "http://localhost:3090/inventory"
    } });

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql("http://localhost:3010/inventory");
    expect(api.inventory.__test_trips.client.defaults.baseURL).to.eql("http://localhost:3090/inventory");
  });

  it("should allow to perform custom request on clean client", function() {
    const api = createApiClient({ baseURL, timeout: 0 });
    expect(api.inventory.products).to.exists;
    expect(api.inventory.insurances).to.exists;

    expectKnownEndpoints(api);
    expect(api._cleanClient.defaults.baseURL).to.eql(baseURL);
    expect(api._cleanClient.defaults.timeout).to.eql(0);

    const mock =  new MockAdapter(api._cleanClient);
    mock.onPost(`/custom/endpoint`).reply(200);
    const promise = api._cleanClient({ url: '/custom/endpoint', method: 'post' });

    mock.restore();
    return promise;
  });

})
