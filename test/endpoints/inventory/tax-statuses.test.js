const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("inventory/tax-statuses", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of tax statuses", () => {
    axiosMock.onGet("/tax-statuses").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.inventory.taxStatuses.all({
      token,
      jwtToken,
      query: {
        page: 1
      }
    });
  });

  it("should GET a tax status by id", () => {
    const taxStatusId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/tax-statuses/${taxStatusId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.inventory.taxStatuses.get({
      token,
      jwtToken,
      taxStatusId
    });
  });

  it("should POST a tax status", () => {
    const data = {
      name: "Exempt",
      percentage: 0
    };
    axiosMock.onPost("/tax-statuses").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.inventory.taxStatuses.create({
      token,
      jwtToken,
      data
    });
  });

  it("should PUT a tax status", () => {
    const taxStatusId = "507f1f77bcf86cd799439011";
    const data = {
      name: "Reduced",
      percentage: 10500
    };
    axiosMock.onPut(`/tax-statuses/${taxStatusId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.inventory.taxStatuses.update({
      token,
      jwtToken,
      taxStatusId,
      data
    });
  });

  it("should DELETE a tax status", () => {
    const taxStatusId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/tax-statuses/${taxStatusId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.inventory.taxStatuses.remove({
      token,
      jwtToken,
      taxStatusId
    });
  });
});
