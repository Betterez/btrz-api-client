const { authorizationHeaders } = require("./../endpoints_helpers");

function eventsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, context, query = {} }) {
    const queryObj = Object.assign({}, query, { context });

    return client({
      url: "/events",
      params: queryObj,
      headers: authorizationHeaders({ token, internalAuthTokenProvider })
    });
  }

  return {
    all,
  };
}

module.exports = eventsFactory;
