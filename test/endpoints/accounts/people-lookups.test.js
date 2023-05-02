const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/people-lookups", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the people-lookups", () => {
    const query = {};

    axiosMock.onGet("/people-lookups", {params: query})
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.peopleLookups.all({token, jwtToken, query});
  });

  it("should get the a people-lookups by ID", () => {
    const query = {
      phone: "123456"
    };
    const personId = "personId";
    axiosMock.onGet(`/people-lookups/${personId}`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.peopleLookups.getById({token, jwtToken, query, personId});
  });

  it("should update a people lookup entry", () => {
    const peopleLookup = {
      doccumentType: "A",
      documentNumber: "B"
    };
    const query = {
      phone: "1234567"
    };
    const personId = "A";
    axiosMock.onPut(`/people-lookups/${personId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.peopleLookups.update({
      token, jwtToken, peopleLookup, personId, query
    });
  });

  it("should create a people lookup entry", () => {
    const peopleLookup = {
      doccumentType: "A",
      documentNumber: "B"
    };

    axiosMock.onPost("/people-lookups")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.peopleLookups.create({
      token, jwtToken, peopleLookup
    });
  });

  it("should delete the people lookup entry by id", () => {
    const personId = "A";
    axiosMock.onDelete(`/people-lookups/${personId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.peopleLookups.remove({
      token, jwtToken, personId
    });
  });
});
