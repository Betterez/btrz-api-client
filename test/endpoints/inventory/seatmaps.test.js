const {axiosMock, expectRequest} = require("./../../test-helpers");
const {expect} = require("chai");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/seatmaps", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  afterEach(() => {
    axiosMock.reset();
  });

  it("should get all vehicles", () => {
    axiosMock.onGet("/seatmaps").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.seatmaps.all({
      jwtToken,
      token,
      query: {}
    });
  });

  it("should get the seatmap", () => {
    const seatmapId = "seatmap123";
    const routeId = "myRoute";
    const scheduleId = "morningSchedule";
    const manifestDate = "2020-01-24";
    const query = {
      originId: "station1",
      destinationId: "station4",
      legFromIndex: 0,
      legToIndex: 1
    };

    const response = {
      seatmap: {
        _id: "seatmap123",
        accountId: "myAcount",
        capacity: 40,
        name: "SeatMap 40",
        sections: [{label: "1"}, {label: "2"}]
      }
    };

    axiosMock.onGet(`/seatmaps/${seatmapId}/available-seats/${routeId}/${scheduleId}/${manifestDate}`).reply((config) => {
      expect(config.params).eql(query);
      expect(config.headers["x-api-key"]).eql(token);
      return [200, response];
    });


    return api.inventory.seatmaps.get({seatmapId, routeId, scheduleId, manifestDate, query, token})
      .then((httpResponse) => {
        expect(httpResponse.status).eql(200);
        expect(httpResponse.data).eql(response);
      });
  });

  it("should get a seatmap occupied seats", () => {
    const seatmapId = "1234";
    axiosMock.onGet(`/seatmaps/${seatmapId}/occupied-seats`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.seatmaps.getOccupiedSeats({
      jwtToken,
      token,
      seatmapId,
      query: {
        newdesign: true
      }
    });
  });
});
