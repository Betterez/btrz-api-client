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

describe("operations/manifest", function() {

  it("should not get a manifest that does not exist", function() {
    const query = {routeId: "51ed2be3cf2c819d00000000", scheduleId: "Morning", date: "2017-08-21"};
    return api.operations.manifest.get({ token, jwtToken, query })
      .catch((err) => {
        expect(err).to.exist;
        expect(err.response.status).to.be.eql(404);
        expect(err.response.data.code).to.be.eql('MANIFEST_NOT_FOUND');
        expect(err.response.data.message).to.be.eql('manifest not found');
      });
  });

  it("should get the manifest", function() {
    const query = {routeId: "51ed2be3cf2c819d5e000010", scheduleId: "Morning", date: "2017-08-21"};
    return api.operations.manifest.get({ token, jwtToken, query })
      .then((res) => {
        expect(res.data.manifest._id).to.be.eql("5997315d8efff74052000005");
      });
  });

  it("should get many manifests by specifying a query to retrieve each manifest", async () => {
    const providerId = "52f94137a8663b2704000009";
    const payload = {
      query: [{
        routeId: "5c50e32e62da38d275000001",
        scheduleId: "ef83faaa-b58f-43bb-8c5c-92e2bfa476c0",
        date: "2019-02-27"
      }, {
        routeId: "528cdd9c61c78c2f2d000066",
        scheduleId: "711",
        date: "2020-01-14"
      }]
    };
    const {data: response} = await api.operations.manifest.getMany({ token, jwtToken, providerId, data: payload });
    expect(response).to.be.an.array;
    expect(response).to.have.length(2);

    //TODO: These expectations probably fail even on a successful response.  Edit these once the POST /manifests endpoint is complete.
    expect(response[0].routeId).to.eql("5c50e32e62da38d275000001");
    expect(response[0].schedule).to.eql("ef83faaa-b58f-43bb-8c5c-92e2bfa476c0");
    //TODO: Particularly the date format is probably incorrect
    expect(response[0].date).to.eql("2019-02-27");

    expect(response[0].routeId).to.eql("528cdd9c61c78c2f2d000066");
    expect(response[0].schedule).to.eql("711-b58f-43bb-8c5c-92e2bfa476c0");
    expect(response[0].date).to.eql("2020-01-14");
  });

  it("should patch a manifest with add_tickets operation", function() {
    const providerId = "5997315d8efff74052000005",
      operations = [{op: "add_tickets", tickets: ["576989208f86028739fef256"]}];
    return api.operations.manifest.patch({ token, jwtToken, query: {providerId}, operations })
      .then((res) => {
        expect(res.data.results).to.have.length(1);
        expect(res.data.results[0].op).to.be.eql("add_tickets");
        expect(res.data.results[0].status).to.be.eql("success");
      });
  });

});
