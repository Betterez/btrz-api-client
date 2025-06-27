const {
  expect
} = require("chai");
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
      expect(httpResponse.status).eql(200);
    });
  });
});
