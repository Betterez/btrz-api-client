const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});
const id = "1234321";

describe("accounts/user/{id}", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.restore();
  });

  it("should return user", () => {
    axiosMock.onGet(`/user/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.users.get({token, id});
  });

  it("should return all the users", () => {
    axiosMock.onGet("/users").reply(expectRequest({statusCode: 200, token}));
    return api.accounts.users.all({token});
  });

  it("should create a user login", () => {
    const data = {audience: "lala"};
    axiosMock.onPost("/users").reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.users.create({
      jwtToken,
      token,
      data
    });
  });

  it("should create user sequence", () => {
    const userSequenceData = {};
    axiosMock.onPost(`/users/${id}/sequences`).reply(expectRequest({statusCode: 200, token, jwtToken, body: userSequenceData}));
    return api.accounts.users.sequences.create({
      jwtToken,
      userId: id,
      token,
      sequence: userSequenceData
    });
  });

  it("should update user sequence", () => {
    const sequenceId = "123";
    const userSequenceData = {};
    // eslint-disable-next-line max-len
    axiosMock.onPut(`/users/${id}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: userSequenceData}));
    return api.accounts.users.sequences.update({
      jwtToken,
      userId: id,
      sequenceId,
      token,
      sequence: userSequenceData
    });
  });
});
