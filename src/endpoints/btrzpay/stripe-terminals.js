const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function stripeTerminalsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, headers, query = {}}) {
    return client.get("/stripe-terminals", {
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  return {
    all
  };
}
module.exports = stripeTerminalsFactory;
