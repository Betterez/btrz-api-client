const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/applied_insurance', function() {
  const token = 'I owe you a token';
  const jwtToken = 'I owe you a JWT token'
  
  afterEach(function() {
    axiosMock.reset();
  });

  it("should get all parcel by trxId", function() {
    const trxId = "trxId1";
    axiosMock.onGet(`/appliedInsurances`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.appliedInsurance.all({ token, query: { trxId: trxId }});
  });


}); 
