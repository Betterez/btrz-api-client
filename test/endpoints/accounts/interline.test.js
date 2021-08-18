const {
  expect
} = require("chai");
const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/interline", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET a list of interline invitations", () => {
    axiosMock.onGet("/interline/invitations").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.invitations.all({
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should GET an interline invitation", () => {
    const invitationId = "invitation123";

    axiosMock.onGet(`/interline/invitations/${invitationId}`).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.invitations.get({
      invitationId,
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should POST a new interline invitation", () => {
    const data = {
      providerEmail: "an.email@betterez.com"
    };
    axiosMock.onPost("/interline/invitations").reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.interline.invitations.create({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should PUT and update the invitation", () => {
    const invitationId = "invitation12312123";
    const data = {
      status: "approved"
    };
    axiosMock.onPut(`/interline/invitations/${invitationId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.interline.invitations.update({
      invitationId,
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should DELETE the network & interline relationship", () => {
    const networkId = "networkId123123";

    axiosMock.onDelete(`/interline/${networkId}`).reply(expectRequest({
      statusCode: 204,
      token,
      jwtToken
    }));
    return api.accounts.interline.network.remove({
      networkId,
      token,
      jwtToken
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(204);
    });
  });

  it("should GET a list of interline providers", () => {
    axiosMock.onGet("/interline/providers").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.providers.all({
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should GET a list of interline consumers", () => {
    axiosMock.onGet("/interline/consumers").reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.consumers.all({
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should PUT and update a network", () => {
    const networkId = "network123";
    const data = {
      productIds: ["product ids", "multiple", "times"],
      fares: ["fare ids", "also multiple", "times"]
    };

    axiosMock.onPut(`/interline/${networkId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.accounts.interline.network.update({networkId, token, jwtToken, data})
      .then((httpResponse) => {
        expect(httpResponse.status).eql(200);
      });
  });

  it("should GET an interline network", () => {
    const networkId = "network123";

    axiosMock.onGet(`/interline/${networkId}`).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.network.get({
      networkId,
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
