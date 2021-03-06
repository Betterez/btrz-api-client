const { expect } = require("chai");

const port = process.env.SALES_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    sales: (baseUrl) => `${baseUrl}/sales`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe("sales/gift-certificates", function() {

  it("should not get a GC for a wrong GC number", function() {
    const GCNumber = "thisGCNumberShouldNotExistAnyWherePlease";
    return api.sales.giftCertificates.get({ token, GCNumber })
      .catch((err) => {
        expect(err).to.exist;
        expect(err.response.status).to.be.eql(400);
        expect(err.response.data.code).to.be.eql('WRONG_ID');
        expect(err.response.data.message).to.be.eql('Gift Certificate is not valid');
      })
  });  

});