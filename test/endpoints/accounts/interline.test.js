const {
  expect
} = require("chai");
const {
  axiosMock,
  expectRequest
} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/interline", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should GET an interline invitation", () => {
    const interlineId = "interline123";

    axiosMock.onGet(`/interline/invitations/${interlineId}`).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.getInvitation({
      interlineId,
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
    return api.accounts.interline.createInvitation({
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should PUT and update the invitation", () => {
    const interlineId = "interlineId123123";
    const data = {
      status: "approved"
    };
    axiosMock.onPut(`/interline/invitations/${interlineId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));
    return api.accounts.interline.updateInvitation({
      interlineId,
      token,
      jwtToken,
      data
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should DELETE the interline relationship", () => {
    const interlineId = "interlineId123123";

    axiosMock.onDelete(`/interline/${interlineId}`).reply(expectRequest({
      statusCode: 204,
      token,
      jwtToken
    }));
    return api.accounts.interline.removeInterline({
      interlineId,
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
    return api.accounts.interline.allProviders({
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
    return api.accounts.interline.allConsumers({
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });

  it("should PUT and update a consumer/provider network", () => {
    const networkId = "network123";
    const data = {
      productIds: ["product ids", "multiple", "times"],
      fares: ["fare ids", "also multiple", "times"]
    };

    axiosMock.onPut(`/interline/consumers/${networkId}`).reply(expectRequest({
      statusCode: 200,
      token,
      jwtToken
    }));

    return api.accounts.interline.updateConsumer({networkId, token, jwtToken, data})
      .then((httpResponse) => {
        expect(httpResponse.status).eql(200);
      });
  });

  it("should GET an interline network", () => {
    const networkId = "network123";

    axiosMock.onGet(`/interline/network/${networkId}`).reply(expectRequest({
      statusCode: 200,
      token
    }));
    return api.accounts.interline.getNetwork({
      networkId,
      token
    }).then((httpResponse) => {
      expect(httpResponse.status).eql(200);
    });
  });
});
