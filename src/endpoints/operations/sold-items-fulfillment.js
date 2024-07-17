const {authorizationHeaders} = require("./../endpoints_helpers.js");

function soldItemsFulfillmentFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/sold-items/fulfillment", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = soldItemsFulfillmentFactory;
