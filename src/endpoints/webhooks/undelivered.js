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

  function patch({ token, jwtToken, operation }) {
    return client({
      url: "/undelivered",
      method: "patch",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      data: operation
    });
  }

  function resend({ token, jwtToken, id }) {
    return client({
      url: `/undelivered/${id}/retry`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function resendAll({ token, jwtToken }) {
    return client({
      url: `/undelivered/retry-all`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
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