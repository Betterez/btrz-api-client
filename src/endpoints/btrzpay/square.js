const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function squareWebhooksFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, providerId}) {
    return client({
      url: `/square-webhooks/${providerId}`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  return {
    create
  };
}

function squareTerminalsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken}) {
    return client.get("/square-terminals", {
      params: {},
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider
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
