const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});
const assert = require("node:assert/strict");


describe("accounts/people-lookups", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";
  const providerId = "5b9ab527c9a3ce576400043e";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the people-lookups", () => {
    const query = {};
    axiosMock.onGet("/people-lookups", {params: query})
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.peopleLookups.all({token, jwtToken, query});
  });

  it("should get the people-lookups with providerId", () => {
    const query = {
      providerId
    };
    axiosMock.onGet("/people-lookups", {params: query})
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.peopleLookups.all({token, jwtToken, query, providerId});
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

  it("should get the a people-lookups by ID with providerId", () => {
    const query = {
      phone: "123456",
      providerId
    };
    const personId = "personId";
    axiosMock.onGet(`/people-lookups/${personId}`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.peopleLookups.getById({token, jwtToken, query, personId});
  });

  it("should update a people lookup entry", () => {
    const person = {
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
      jwtToken, token, personId, person
    })
      .then((res) => {
        assert.deepStrictEqual(res.config.params, {});
        assert.deepStrictEqual(res.config.data, JSON.stringify({person}));
        assert.deepStrictEqual(res.status, 200);
      });
  });

  it("should update a people lookup entry with providerId", () => {
    const person = {
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
      jwtToken, token, personId, person, providerId
    })
      .then((res) => {
        assert.deepStrictEqual(res.config.params, {providerId});
        assert.deepStrictEqual(res.config.data, JSON.stringify({person}));
        assert.deepStrictEqual(res.status, 200);
      });
  });

  it("should create a people lookup entry", () => {
    const person = {
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
      token, jwtToken, person
    })
      .then((res) => {
        assert.deepStrictEqual(res.config.params, {});
        assert.deepStrictEqual(res.config.data, JSON.stringify({person}));
        assert.deepStrictEqual(res.status, 200);
      });
  });

  it("should create a people lookup entry with providerId", () => {
    const person = {
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
      token, jwtToken, person, providerId
    })
      .then((res) => {
        assert.deepStrictEqual(res.config.params, {providerId});
        assert.deepStrictEqual(res.config.data, JSON.stringify({person}));
        assert.deepStrictEqual(res.status, 200);
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
