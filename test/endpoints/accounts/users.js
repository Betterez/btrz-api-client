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

  it("should sign in a user", () => {
    const data = {audience: "lala"};
    axiosMock.onPost("/users").reply(expectRequest({statusCode: 200, token, jwtToken, body: data}));
    return api.accounts.users.login({
      jwtToken,
      token,
      data
    });
  });

  it("should update a user", () => {
    const userId = "627a25404a761f0fcbdbdfc1";
    const user = {
      firstName: "Jane",
      lastName: "Doe",
      display: "JD"
    };
    axiosMock.onPut(`/users/${userId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: {user}}));
    return api.accounts.users.update({
      jwtToken,
      token,
      userId,
      user
    });
  });

  it("should create a user", () => {
    const user = {
      firstName: "Jane",
      lastName: "Doe",
      display: "JD",
      email: "test@something.com",
      password: "123456"
    };
    axiosMock.onPost("/users/import").reply(expectRequest({statusCode: 200, token, jwtToken, body: {users: [user]}}));
    return api.accounts.users.createOrUpdateMany({
      jwtToken,
      token,
      users: [user]
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

  it("should transfer an user sequence", () => {
    const sequenceId = "123";
    const newUserId = "123";
    const operationData = {
      operation: "transfer",
      newUserId
    };
    // eslint-disable-next-line max-len
    axiosMock.onPatch(`/users/${id}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: operationData}));
    return api.accounts.users.sequences.transfer({
      jwtToken,
      userId: id,
      sequenceId,
      token,
      newUserId
    });
  });
});
