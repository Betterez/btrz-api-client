const { expect } = require("chai");

const port = process.env.OPERATIONS_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    operations: (baseUrl) => `${baseUrl}/operations`
  }
});

describe.only("operations/parcel", function() {

  it("should not get a parcel that does not exist", function() {
    const parcelId = "5967e3da1b7dfb3047e5ac81";
    return api.operations.parcel.get({ token, jwtToken, id: parcelId })
      .catch((err) => {
        expect(err).to.exist;
        expect(err.response.status).to.be.eql(404);
        expect(err.response.data.code).to.be.eql('PARCEL_NOT_FOUND');
        expect(err.response.data.message).to.be.eql('Parcel not found');
      })
  });

});