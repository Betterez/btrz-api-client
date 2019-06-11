const { authorizationHeaders } = require("./../endpoints_helpers");

function undeliveredFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, context, query = {} }) {
    const queryObj = Object.assign({}, query, { context });

    return client({
      url: "/undelivered",
      params: queryObj,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function getById({ token, jwtToken, id }) {
    return client({
      url: `/undelivered/${id}`,
      method: "get",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function resend({ token, jwtToken, id }) {
    return client({
      url: `/undelivered/${id}/retry`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  return {
    all,
    getById,
    resend
  };

}

module.exports = undeliveredFactory;