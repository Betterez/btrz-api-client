const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function squareWebhooksFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, providerId, headers}) {
    return client({
      url: `/square-webhooks/${providerId}`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    create
  };
}

function squareTerminalsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client.get("/square-terminals", {
      params: {},
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  return {
    get
  };
}
module.exports = {
  squareWebhooksFactory,
  squareTerminalsFactory
};
