const { authorizationHeaders } = require("./../endpoints_helpers");

function undeliveredFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, context, query = {}, headers }) {
    const queryObj = Object.assign({}, query, { context });

    return client({
      url: "/undelivered",
      params: queryObj,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function getById({ token, jwtToken, id, headers }) {
    return client({
      url: `/undelivered/${id}`,
      method: "get",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function patch({ token, jwtToken, operation, headers }) {
    return client({
      url: "/undelivered",
      method: "patch",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      data: operation
    });
  }

  function resend({ token, jwtToken, id, headers }) {
    return client({
      url: `/undelivered/${id}/retry`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function resendAll({ token, jwtToken, headers }) {
    return client({
      url: `/undelivered/retry-all`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  return {
    all,
    getById,
    patch,
    resend,
    resendAll
  };

}

module.exports = undeliveredFactory;