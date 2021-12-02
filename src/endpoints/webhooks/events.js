const { authorizationHeaders } = require("./../endpoints_helpers");

function eventsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, context, query = {}, headers }) {
    const queryObj = Object.assign({}, query, { context });

    return client({
      url: "/events",
      params: queryObj,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  return {
    all,
  };
}

module.exports = eventsFactory;
