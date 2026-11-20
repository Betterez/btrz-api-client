const assert = require("node:assert/strict");
const {
  axiosMock,
  expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/transport-regulations", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should POST a new CNRT transpor-regulation", () => {
    const data = {
      manifestId: "123"
    };
    axiosMock.onPost("/transport-regulations/cnrt/manifests").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.operations.transportRegulations.cnrt.create({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
    });
  });

  it("should PUT the CNRT list linked to a manifest", () => {
    const manifestId = "5a8b0c9d1e2f3a4b5c6d7e8f";
    const data = {
      cnrtListId: "123456"
    };
    axiosMock.onPut(`/transport-regulations/cnrt/manifests/${manifestId}`, data).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.operations.transportRegulations.cnrt.manifests.update({
      token,
      jwtToken,
      manifestId,
      data
    }).then((httpResponse) => {
      assert.deepStrictEqual(httpResponse.status, 200);
    });
  });
});
