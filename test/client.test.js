const {expect} = require("chai");
const MockAdapter = require("axios-mock-adapter");

const {createApiClient} = require("./../src/client.js");
const {createTestServer, axiosMock} = require("./test-helpers.js");

function expectKnownEndpoints(api) {
  expect(api.inventory.products).to.exist;
  expect(api.inventory.insurances).to.exist;
  expect(api.inventory.trips).to.exist;
}

describe("client", () => {
  const baseURL = "http://someUrl.com";

  it("should create a client with production values if no default provided", () => {
    const api = createApiClient();

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql("https://api.betterez.com/inventory");
    expect(api.inventory.__test.client.defaults.timeout).to.eql(15000);
  });

  it("should create a client with default values", () => {
    const api = createApiClient({baseURL});

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql(baseURL);
    expect(api.inventory.__test.client.defaults.timeout).to.eql(0);
  });

  it("should create a client that uses the provided default request headers when making a request to any subsystem", () => {
    const api = createApiClient({headers: {"x-amzn-trace-id": "some_value"}});

    const ignoredApiProperties = ["constants", "_cleanClient"];
    function propertyIsRelevant(property) {
      return !ignoredApiProperties.includes(property);
    }
    for (const subsystem of Object.keys(api).filter(propertyIsRelevant)) {
      expect(api[subsystem].__test.client.defaults.headers).to.include({"x-amzn-trace-id": "some_value"});
    }
  });

  it("should expose a INTERNAL_AUTH_TOKEN constant", () => {
    const api = createApiClient({baseURL});
    expect(api.constants.INTERNAL_AUTH_TOKEN_SYMBOL).to.be.eql("internal_auth_token");
  });

  it("should allow to override baseUrl for custom endpoints", () => {
    const api = createApiClient({
      baseURL,
      timeout: 10,
      baseURLOverride: {
        inventory: (url) => {
          return `${url}/somePath`;
        }
      }
    });
    expect(api.inventory.products).to.exist;
    expect(api.inventory.insurances).to.exist;

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql(`${baseURL}/somePath`);
    expect(api.inventory.__test.client.defaults.timeout).to.eql(10);
  });

  it("should allow a different baseUrl to be specified for trip search endpoints", () => {
    const api = createApiClient({
      baseURL,
      timeout: 10,
      baseURLOverride: {
        inventory: () => { return "http://localhost:3010/inventory"; },
        trips: () => { return "http://localhost:3090/inventory"; }
      }
    });

    expectKnownEndpoints(api);
    expect(api.inventory.__test.client.defaults.baseURL).to.eql("http://localhost:3010/inventory");
    expect(api.inventory.__test_trips.client.defaults.baseURL).to.eql("http://localhost:3090/inventory");
  });

  it("should allow to perform custom request on clean client", () => {
    const api = createApiClient({baseURL, timeout: 0});
    expect(api.inventory.products).to.exist;
    expect(api.inventory.insurances).to.exist;

    expectKnownEndpoints(api);
    expect(api._cleanClient.defaults.baseURL).to.eql(baseURL);
    expect(api._cleanClient.defaults.timeout).to.eql(0);

    const mock = new MockAdapter(api._cleanClient);
    mock.onPost("/custom/endpoint").reply(200);
    const promise = api._cleanClient({url: "/custom/endpoint", method: "post"});

    mock.restore();
    return promise;
  });

  describe("http networking", () => {
    describe("with keepAlive enabled in a custom endpoint", () => {
      let mockServer = null;

      before((done) => {
        axiosMock.restore();
        mockServer = createTestServer({
          host: "localhost",
          port: 8888,
          maxSockets: 10
        }, (req) => {
          expect(req.headers.connection).to.equal("keep-alive");
        });
        mockServer.create((err) => {
          if (err) return done(err);
          return done();
        });
      });

      after((done) => {
        mockServer.close(() => {
          done();
        });
      });

      it("should only use the max sockets available to perform 100 concurrent requests", async () => {
        const http = require("http");
        const https = require("https");

        const agents = {
          httpAgent: new http.Agent({keepAlive: true, maxSockets: 10}),
          httpsAgent: new https.Agent({keepAlive: true})
        };
        const api = createApiClient({baseURL: "http://localhost:8888", timeout: 0, agents});
        const promises = new Array(100).fill().map((i) => {
          return api._cleanClient({url: `/test/${i}`, method: "get"});
        });
        return Promise.all(promises);
      });
    });

    describe("with keepAlive enabled in a known endpoint", () => {
      let mockServer = null;

      before((done) => {
        axiosMock.restore();
        mockServer = createTestServer({
          host: "localhost",
          port: 8888,
          maxSockets: 10
        }, (req) => {
          expect(req.headers.connection).to.equal("keep-alive");
        });
        mockServer.create((err) => {
          if (err) return done(err);
          return done();
        });
      });

      after((done) => {
        mockServer.close(() => {
          done();
        });
      });

      it("should use at least 10 sockets to perform 100 concurrent product requests", async () => {
        const http = require("http");
        const https = require("https");

        const agents = {
          httpAgent: new http.Agent({keepAlive: true, maxSockets: 10}),
          httpsAgent: new https.Agent({keepAlive: true})
        };
        const api = createApiClient({baseURL: "http://localhost:8888", timeout: 0, agents});
        const promises = new Array(100).fill().map(() => {
          return api.inventory.products.all({token: "I owe you a token"});
        });
        return Promise.all(promises);
      });
    });

    describe.skip("with keepAlive disabled (default)", () => {
      let mockServer = null;

      before((done) => {
        axiosMock.restore();
        mockServer = createTestServer({
          host: "localhost",
          port: 8888,
          maxSockets: 120
        }, (req) => {
          expect(req.headers.connection).to.equal("close");
        });
        mockServer.create((err) => {
          if (err) return done(err);
          return done();
        });
      });

      after((done) => {
        mockServer.close(() => {
          done();
        });
      });

      it("should socket no more than 100 sockets to perform 100 concurrent requests", async () => {
        const api = createApiClient({baseURL: "http://localhost:8888", timeout: 0});
        const promises = new Array(100).fill().map((i) => {
          return api._cleanClient({url: `/test/${i}`, method: "get"});
        });
        return Promise.all(promises);
      });
    });
  });
});
