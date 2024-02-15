const {
  expect
} = require("chai");
const {
  axiosMock,
  expectRequest
} = require("../../test-helpers.js");
const api = require("../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("operations/vehicle-assignments", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of vehicle assignments", () => {
    axiosMock.onGet("/vehicle-assignments").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.operations.vehicleAssignments.all({
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should GET a vehicle assignment", () => {
    const vehicleAssignmentId = "assignment999";

    axiosMock.onGet(`/vehicle-assignments/${vehicleAssignmentId}`).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.operations.vehicleAssignments.get({
      vehicleAssignmentId,
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should POST a new vehicle assignment", () => {
    const data = {
      name: "test assignment",
      groups: []
    };
    axiosMock.onPost("/vehicle-assignments").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.operations.vehicleAssignments.create({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should PUT and update the vehicle assignment", () => {
    const vehicleAssignmentId = "assignment999";
    const data = {
      groups: [{"test": 1}],
      status: "published"
    };
    axiosMock.onPut(`/vehicle-assignments/${vehicleAssignmentId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.operations.vehicleAssignments.update({
      vehicleAssignmentId,
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
