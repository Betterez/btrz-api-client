const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/agency-types", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of agency types", () => {
    axiosMock.onGet("/agency-types").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.agencyTypes.all({
      token,
      jwtToken,
      query: {
        page: 1
      }
    });
  });

  it("should GET an agency type by id", () => {
    const agencyTypeId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/agency-types/${agencyTypeId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.agencyTypes.get({
      token,
      jwtToken,
      agencyTypeId
    });
  });

  it("should POST an agency type", () => {
    const agencyType = {
      name: "Retail"
    };
    axiosMock.onPost("/agency-types").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: {agencyType}
    }));
    return api.accounts.agencyTypes.create({
      token,
      jwtToken,
      agencyType
    });
  });

  it("should PUT an agency type", () => {
    const agencyTypeId = "507f1f77bcf86cd799439011";
    const agencyType = {
      name: "Updated Retail"
    };
    axiosMock.onPut(`/agency-types/${agencyTypeId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: {agencyType}
    }));
    return api.accounts.agencyTypes.update({
      token,
      jwtToken,
      agencyTypeId,
      agencyType
    });
  });

  it("should DELETE an agency type", () => {
    const agencyTypeId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/agency-types/${agencyTypeId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.agencyTypes.remove({
      token,
      jwtToken,
      agencyTypeId
    });
  });
});
