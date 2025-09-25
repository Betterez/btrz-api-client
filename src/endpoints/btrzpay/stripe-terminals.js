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

  function simulate({token, jwtToken, id, stripePayment, query = {}, headers}) {
    return client({
      url: `/stripe-terminals/${id}/simulate`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {stripePayment}
    });
  }

  return {
    all,
    simulate
  };
}
module.exports = stripeTerminalsFactory;
