const { expect } = require("chai");
const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://ratality.com/v2" });

describe("integrations", () => {
  const jwtToken = 'I owe you a JWT token';
  const version = "v2";

  afterEach(function() {
    axiosMock.restore();
  });

  it("should perform an integration create", () => {
    const clientId = "clientId123";
    const data = {
      "integrationType": "Betterez",
      "outboundConnection": {
        "url": "https://sandbox-api.betterez.com",
        "username": "user@place.com",
        "password": "123456"
      }
    };
    axiosMock.onPost(`/${version}/client/integrations`).reply((config) => {
      expectRequest({statusCode: 200, jwtToken, body: data, withoutApiKey: true});
      expect(config.headers).to.include({clientId});
      return [200, {
        "integrationType": "Betterez",
        "clientId": clientId,
        "channelId": 1000,
        "outboundConnection": {
          "url": "https://sandbox-api.betterez.com",
          "username": "user@place.com",
          "password": "123456"
        },
        "inboundConnection": {
          "url": "https://integrate.us.ratality.com/betterez/99999",
          "tags": [
            "brand.created",
            "brand.updated",
            "station.created",
            "station.updated",
            "route.created",
            "route.updated",
            "route.deleted",
            "schedule.created",
            "schedule.updated",
            "schedule.deleted",
            "ticket.created",
            "ticket.updated",
            "ticket.moved"
          ]
        }
      }];
    });
    return api.ratality.integrations.create({
      jwtToken,
      clientId,
      data
    });
  });

  it("should perform an integration get", () => {
    const clientId = "clientId123";
    axiosMock.onGet(`/${version}/client/integrations`).reply((config) => {
      expectRequest({statusCode: 200, jwtToken, withoutApiKey: true});
      expect(config.headers).to.include({clientId});
      return [200, {integrations: []}];
    });
    return api.ratality.integrations.get({
      jwtToken,
      clientId
    });
  });

  it("should perform an integration delete", () => {
    const clientId = "clientId123";
    const integrationType = "Betterez";
    axiosMock.onDelete(`/${version}/client/integrations/${integrationType}`).reply((config) => {
      expectRequest({statusCode: 200, jwtToken, withoutApiKey: true});
      expect(config.headers).to.include({clientId});
      expect(config.url).to.contain("Betterez");
      return [200, {integrations: []}];
    });
    return api.ratality.integrations.remove({
      jwtToken,
      clientId,
      integrationType
    });
  });
});
