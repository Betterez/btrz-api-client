const {
  axiosMock, expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/insurances", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should list insurances", () => {
    axiosMock.onGet("/insurances").reply(expectRequest({
      statusCode: 200, token
    }));
    return api.inventory.insurances.all({
      token
    });
  });

  it("should list insurances with a query", () => {
    axiosMock.onGet("/insurances").reply(expectRequest({
      statusCode: 200, token
    }));
    const query = {productId: "123"};
    return api.inventory.insurances.all({
      token, query
    });
  });

  it("should return the insurance by if", () => {
    axiosMock.onGet("/insurances/123").reply(expectRequest({
      statusCode: 200, token
    }));
    const insuranceId = 123;
    return api.inventory.insurances.get({
      token, insuranceId
    });
  });

  it("should create insurances", () => {
    axiosMock.onPost("/insurances").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.insurances.create({
      jwtToken,
      token,
      insurance: {
        cost: 1000, threshold: 1000
      }
    });
  });

  it("should update insurance", () => {
    axiosMock.onPut("/insurances/1").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.insurances.put({
      jwtToken,
      token,
      insurance: {
        _id: "1",
        enabled: true,
        minimun: 100
      }
    });
  });
});
