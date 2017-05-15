const { expect } = require("chai");
const MockAdapter = require('axios-mock-adapter');

const { createApiClient } = require("./../src/client");
  
function expectKnownEndpoints(api) {
  expect(api.inventory.products).to.exists;
  expect(api.inventory.insurances).to.exists;
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


  it("should allow to override baseUrl for custom endpoints", function() {
    const api = createApiClient({ baseURL, timeout: 10, baseURLOverride: { inventory: (url) => `${url}/somePath` } });
    expect(api.inventory.products).to.exists;
    expect(api.inventory.insurances).to.exists;

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql(`${baseURL}/somePath`);
    expect(api.inventory.__test.client.defaults.timeout).to.eql(10);
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