const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("operations/passenger-check-in-info", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should list providers", () => {
    const query = {documentType: "123123123123", documentNumber: "123123"};
    axiosMock.onGet("/passenger-check-in-info").reply(expectRequest({statusCode: 200, token, jwtToken, query}));
    return api.operations.passengerCheckInInfo.all({token, jwtToken, query});
  });


  it("should return a single passenger-check-in-info", () => {
    const id = "12312312312312";
    axiosMock.onGet(`/passenger-check-in-info/${id}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.passengerCheckInInfo.get({token, jwtToken, query: {}, id});
  });

  it("should create a passenger-check-in-info", () => {
    axiosMock.onPost("/passenger-check-in-info").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.passengerCheckInInfo.create({
      jwtToken,
      token,
      data: {
        information: {firstName: "fake"},
        ticketId: "123123123123",
        trxId: "123123123213"
      }
    });
  });

  it("should update a passenger-check-in-info", () => {
    const passengerCheckInInfoId = "123123123123";
    const data = {
      information: {firstName: "name"}
    };
    axiosMock.onPut(`/passenger-check-in-info/${passengerCheckInInfoId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.passengerCheckInInfo.update({jwtToken, token, id: passengerCheckInInfoId, data});
  });
});
