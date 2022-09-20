/* eslint-disable import/extensions */
const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("inventory/seatclasses", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list seat classes", () => {
    axiosMock.onGet("/seatclasses").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.seatClasses.all({token, jwtToken});
  });

  it("should get a seat class", () => {
    const seatClassId = "1234";
    axiosMock.onGet(`/seatclasses/${seatClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.seatClasses.get({
      jwtToken,
      token,
      id: seatClassId
    });
  });

  it("should create a seat class", () => {
    axiosMock.onPost("/seatclasses").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.seatClasses.create({
      jwtToken,
      token,
      data: {
        name: "example",
        description: "An example"
      }
    });
  });

  it("should update a seat class", () => {
    const seatClassId = "123123123123";
    const data = {
      name: "other",
      description: "An example"
    };
    axiosMock.onPut(`/seatclasses/${seatClassId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.seatClasses.update({jwtToken, token, id: seatClassId, data});
  });
});
