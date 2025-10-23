describe("accounts/user/{id}", () => {
  const token = "someToken";
  const jwtToken = "I owe you a JWT token";
  const {axiosMock, expectRequest} = require("./../../test-helpers.js");
  const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

  afterEach(() => {
    axiosMock.restore();
  });

  it("should return user", () => {
    const id = "1234321";
    axiosMock.onGet(`/user/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.users.get({token, id});
  });

  it("should return user v2", () => {
    const id = "1234321";
    axiosMock.onGet(`/users/${id}`).reply(expectRequest({statusCode: 200, token}));
    return api.accounts.users.getV2({token, id});
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

  it("should impersonate an user", () => {
    const offlineUserId = "anOfflineUserId";
    axiosMock.onPost("/users/impersonate").reply(
      expectRequest({
        statusCode: 200,
        token,
        jwtToken,
        body: {offlineUserId: "anOfflineUserId"}
      })
    );
    return api.accounts.users.impersonate({
      jwtToken,
      token,
      offlineUserId
    });
  });

  it("should return user sequence", () => {
    const sequenceId = "123";
    const userId = "1234321";
    axiosMock.onGet(`/users/${userId}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.users.sequences.get({
      jwtToken,
      userId,
      sequenceId,
      token
    });
  });

  it("should return all user sequences", () => {
    const userId = "1234321";
    axiosMock.onGet(`/users/${userId}/sequences`).reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.users.sequences.all({
      jwtToken,
      userId,
      token
    });
  });

  it("should create user sequence", () => {
    const userSequenceData = {};
    const userId = "1234321";
    axiosMock.onPost(`/users/${userId}/sequences`).reply(expectRequest({statusCode: 200, token, jwtToken, body: userSequenceData}));
    return api.accounts.users.sequences.create({
      jwtToken,
      userId,
      token,
      sequence: userSequenceData
    });
  });

  it("should update user sequence", () => {
    const sequenceId = "123";
    const userId = "1234321";
    const userSequenceData = {};
    // eslint-disable-next-line max-len
    axiosMock.onPut(`/users/${userId}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: userSequenceData}));
    return api.accounts.users.sequences.update({
      jwtToken,
      userId,
      sequenceId,
      token,
      sequence: userSequenceData
    });
  });

  it("should transfer an user sequence", () => {
    const userId = "123";
    const sequenceId = "123";
    const newUserId = "123";
    const operationData = {
      operation: "transfer",
      newUserId
    };
    // eslint-disable-next-line max-len
    axiosMock.onPatch(`/users/${userId}/sequences/${sequenceId}`).reply(expectRequest({statusCode: 200, token, jwtToken, body: operationData}));
    return api.accounts.users.sequences.transfer({
      jwtToken,
      userId,
      sequenceId,
      token,
      newUserId
    });
  });
});
