const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/applied_insurance", () => {
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all parcel by trxId", () => {
    const trxId = "trxId1";
    axiosMock.onGet("/appliedInsurances").reply(expectRequest({statusCode: 200, token}));
    return api.operations.appliedInsurance.all({token, query: {trxId}});
  });
});
