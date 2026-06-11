const {axiosMock, expectRequest} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("bpes/configuration", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should get the BPE configuration", () => {
    axiosMock.onGet("/bpe-configurations").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.bpes.configuration.get({token, jwtToken});
  });

  it("should create the BPE configuration", () => {
    axiosMock.onPost("/bpe-configurations").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.bpes.configuration.create({
      token,
      jwtToken,
      bpeConfiguration: {
        companyIdentificator: "00000000-0000-0000-0000-000000000000"
      }
    });
  });

  it("should update the BPE configuration", () => {
    axiosMock.onPut("/bpe-configurations").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.bpes.configuration.update({
      token,
      jwtToken,
      bpeConfiguration: {
        companyIdentificator: "00000000-0000-0000-0000-000000000001"
      }
    });
  });
});
