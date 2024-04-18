const {expect} = require("chai");
const {
  axiosMock, expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({
  baseURL: "http://test.com"
});

describe("operations/manifest", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const providerId = "providerId";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get a manifest by routeId, scheduleId and date", () => {
    const query = {
      providerId,
      routeId: "2349283409238429348",
      scheduleId: "abc",
      date: "2017-10-10"
    };
    axiosMock.onGet("/manifests").reply(expectRequest({
      statusCode: 200, token
    }));
    return api.operations.manifest.get({
      token, jwtToken, query
    });
  });

  it("should get a manifest by manifestId", () => {
    const manifestId = "manifestId";
    axiosMock.onGet(`/manifests/${manifestId}`).reply(expectRequest({
      statusCode: 200, token
    }));
    return api.operations.manifest.getById({
      token, jwtToken, manifestId
    });
  });

  it("should get many manifests", () => {
    const data = {
      query: [{
        routeId: "2349283409238429348",
        scheduleId: "abc",
        date: "2019-10-10"
      }]
    };
    axiosMock.onPost("/all-manifests").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.operations.manifest.getAll({token, jwtToken, providerId, data});
  });

  it("should get outlook manifests", () => {
    const query = {
      providerId,
      productId: "productId",
      date: "2018-01-01"
    };
    axiosMock.onGet("/outlook-manifests").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.manifest.outlook({
      token, jwtToken, query
    });
  });

  it("should patch a manifest", () => {
    axiosMock.onPatch("/manifests").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.manifest.patch({
      token, jwtToken, query: {providerId}, operations: {op: "add_tickets", tickets: []}
    });
  });

  it("should save a manifest", () => {
    const data = {
      manifestId: "manifestId",
      comments: "This is a comment!",
      capacity: 22
    };
    axiosMock.onPut("/manifests").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.manifest.save({
      token, jwtToken, providerId, data
    });
  });

  it("should add comment to the manifest", async () => {
    const manifestId = "theId";
    const data = {
      comment: {
        test: "The comment"
      }
    };

    // optional query
    const query = {
      accountId: providerId,
      routeId: "2349283409238429348",
      scheduleId: "abc",
      date: "2017-10-10"
    };
    axiosMock.onPut(`/manifests/${manifestId}/comments`).reply(expectRequest({statusCode: 201, token, jwtToken}));
    const call = await api.operations.manifest.updateComment({token, jwtToken, manifestId, data, query});
    expect(call.config.params).to.be.eql(query);
    return call;
  });

  it("should update the manifest status", async () => {
    const manifestId = "theId";
    const data = {
      status: {
        test: "canceled"
      }
    };

    // optional query
    const query = {
      accountId: providerId,
      routeId: "2349283409238429348",
      scheduleId: "abc",
      date: "2017-10-10"
    };
    axiosMock.onPut(`/manifests/${manifestId}/status`).reply(expectRequest({statusCode: 201, token, jwtToken}));
    const call = await api.operations.manifest.updateStatus({token, jwtToken, manifestId, data, query});
    expect(call.config.params).to.be.eql(query);
    return call;
  });

  it("should add capacity exception to the manifest", async () => {
    const manifestId = "theId";
    const data = {
      capacityException: {
        fromId: "fromId",
        toId: "toId",
        capacity: 22
      }
    };

    // optional query
    const query = {
      accountId: providerId,
      routeId: "2349283409238429348",
      scheduleId: "abc",
      date: "2017-10-10"
    };
    axiosMock.onPost(`/manifests/${manifestId}/capacity-exceptions`).reply(expectRequest({statusCode: 201, token, jwtToken}));
    const call = await api.operations.manifest.addCapacityException({token, jwtToken, manifestId, data, query});
    expect(call.config.params).to.be.eql(query);
    return call;
  });

  it("should add capacity exception to the manifest", async () => {
    const manifestId = "theId";
    const exceptionId = "exceptionId";

    axiosMock.onDelete(`/manifests/${manifestId}/capacity-exceptions/${exceptionId}`).reply(expectRequest({
      statusCode: 201, token, jwtToken
    }));
    return api.operations.manifest.removeCapacityException({
      token, jwtToken, manifestId, exceptionId
    });
  });

  it("should add user to the manifest", async () => {
    const manifestId = "theId";
    const data = {
      user: {
        userId: "theUserId"
      }
    };

    // optional query
    const query = {
      accountId: providerId,
      routeId: "2349283409238429348",
      scheduleId: "abc",
      date: "2017-10-10"
    };
    axiosMock.onPost(`/manifests/${manifestId}/users`).reply(expectRequest({statusCode: 201, token, jwtToken}));
    const call = await api.operations.manifest.addUser({token, jwtToken, manifestId, data, query});
    expect(call.config.params).to.be.eql(query);
    return call;
  });

  it("should remove a user from manifest", () => {
    const manifestId = "theId";
    const userId = "theUserId";

    axiosMock.onDelete(`/manifests/${manifestId}/users/${userId}`).reply(expectRequest({
      statusCode: 201, token, jwtToken
    }));
    return api.operations.manifest.removeUser({
      token, jwtToken, manifestId, userId
    });
  });

  it("should return a single manifest report", () => {
    const id = "12312312312312";
    axiosMock.onGet(`/manifests/${id}/reports`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.manifest.reports.get({token, jwtToken, query: {}, id});
  });

  it("should return manifest with dispatch information", () => {
    const manifestId = "12312312312312";
    const data = {
      user: {
        firstName: "Al",
        lastName: "Saunders",
        email: "al@betterez.com",
        shiftId: "649f20a95679910784326e81",
        shiftNumber: "S-WTN6LDX",
        shiftLocation: {
          name: "Houston (Tx)",
          stationId: "5d40d1f339861cba05a2aa3f",
          country: "US",
          province: "Texas"
        }
      }
    };
    axiosMock.onPost(`/manifests/${manifestId}/dispatches`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.manifest.dispatch({token, jwtToken, manifestId, data, query: {}});
  });

  it("should update the manifest with the dispatch reporting data", () => {
    const manifestId = "12312312312312";
    const data = {
      users: ["12312312312312", "23423423423423"],
      busId: "bus",
      distanceTraveled: 123,
      operatingCompanyName: "opCo"
    };
    axiosMock.onPut(`/manifests/${manifestId}/dispatch/reporting`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.manifest.updateDispatchReporting({token, jwtToken, manifestId, data});
  });

  it("should create a dispatch reporting", () => {
    const data = {
      dateFrom: "17/04/2024",
      dateTo: "18/04/2024"
    };
    axiosMock.onPost("/manifests/dispatch/reporting")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.operations.manifest.createDispatchReporting({token, jwtToken, data});
  });
});

describe("operations/manifest/legs/tickets/noshow", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";
  const headers = {};
  const query = {};

  afterEach(() => {
    axiosMock.reset();
  });

  it("should call the noShow endpoint with proper values", async () => {
    const manifestId = "1123581321345589144233";
    const legFromId = "idLeg";
    const ticketId = "idTicket";

    axiosMock.onPut(`/manifests/${manifestId}/legs/${legFromId}/tickets/${ticketId}/noshow`).reply((config) => {
      expect(config.url).to.contain.oneOf([manifestId, legFromId, ticketId]);
      expect(config.headers.authorization).to.be.eql(`Bearer ${jwtToken}`);
      expect(config.headers["x-api-key"]).to.be.eql(token);
      return [200, {}];
    });
    return api.operations.manifest.legs.tickets.noshow({
      token, jwtToken, query, headers, manifestId, legFromId, ticketId
    });
  });
});

describe("operations/manifest/:manifestId/labels", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });
  it("should add a label to a manifest", async () => {
    const manifestId = "manifestId";
    const data = {
      labelId: "labelId"
    };
    axiosMock.onPost(`/manifests/${manifestId}/labels`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.manifest.labels.add({token, jwtToken, manifestId, data});
  });
  it("should remove a label from a manifest", async () => {
    const manifestId = "manifestId";
    const labelId = "labelId";
    axiosMock.onDelete(`/manifests/${manifestId}/labels/${labelId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.operations.manifest.labels.remove({token, jwtToken, manifestId, labelId});
  });
});
