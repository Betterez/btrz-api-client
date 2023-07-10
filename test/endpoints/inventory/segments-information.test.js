const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/segments-information", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should create a segment information", () => {
    axiosMock.onPost("/segments-information").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.segmentsInformation.create({
      jwtToken,
      token,
      segmentInformation: {
        name: "My segment informationl"
      }
    });
  });

  it("should get all pieces of segment information", () => {
    axiosMock.onGet("/segments-information").reply(expectRequest({statusCode: 200, token, jwtToken }));
    return api.inventory.segmentsInformation.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should update a piece of segment information", () => {
    const segmentInformationId = "1234";
    axiosMock.onPut(`/segments-information/${segmentInformationId}`).reply(expectRequest({ statusCode: 200, token, jwtToken }));
    return api.inventory.segmentsInformation.update({
      jwtToken,
      token,
      segmentInformationId,
      segmentInformation: {
        name: "My Updated segment information"
      }
    });
  });

  it("should get a piece of segment information", () => {
    const segmentInformationId = "1234";
    axiosMock.onGet(`/segments-information/${segmentInformationId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.segmentsInformation.get({
      jwtToken,
      token,
      segmentInformationId
    });
  });

  it("should delete a piece of segment information", () => {
    const segmentInformationId = "1234";
    axiosMock.onDelete(`/segments-information/${segmentInformationId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.segmentsInformation.remove({
      jwtToken,
      token,
      segmentInformationId
    });
  });
});
