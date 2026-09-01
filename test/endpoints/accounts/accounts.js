const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("accounts/accounts", () => {
  const jwtToken = "I owe you a JWT token";
  const token = "I owe you a token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET an account", () => {
    const accountId = "123123123123";
    const withoutApiKey = true;
    axiosMock.onGet(`/accounts/${accountId}`).reply(expectRequest({
      statusCode: 200, jwtToken, withoutApiKey
    }));
    return api.accounts.accounts.get({
      jwtToken,
      accountId
    });
  });

  it("should POST default users for an account", () => {
    const accountId = "account123";
    const data = {
      adminUserData: {
        email: "admin@example.com",
        password: "password"
      }
    };
    axiosMock.onPost(`/accounts/${accountId}/default-users`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken,
      body: data
    }));
    return api.accounts.accounts.defaultUsers.create({
      token,
      jwtToken,
      accountId,
      data
    });
  });

  it("should POST configuration replication for an account", () => {
    const accountId = "5976090487a7f1e158000041";
    const query = {
      superUserId: "superUserId",
      superUserHash: "superUserHash"
    };
    axiosMock.onPost(`/accounts/${accountId}/configuration-replication`)
      .reply(expectRequest({
        statusCode: 202,
        token,
        jwtToken,
        query
      }));
    return api.accounts.accounts.configurationReplication.create({
      token,
      jwtToken,
      accountId,
      query
    });
  });

  it("should PUT session recording settings for an account", () => {
    const accountId = "5976090487a7f1e158000041";
    const query = {
      superUserId: "superUserId",
      superUserHash: "superUserHash"
    };
    const data = {
      logRocket: {enabled: true, pathPrefixes: ["/manifests"]},
      rrweb: {enabled: true, pathGroups: [["/manifests"]]}
    };
    axiosMock.onPut(`/accounts/${accountId}/session-recording-settings`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken,
        query,
        body: data
      }));
    return api.accounts.accounts.sessionRecordingSettings.update({
      token,
      jwtToken,
      accountId,
      query,
      data
    });
  });
});
