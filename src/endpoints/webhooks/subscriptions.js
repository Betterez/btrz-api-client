const { authorizationHeaders } = require("./../endpoints_helpers");

function subscriptionsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, context, query = {}, headers }) {
    const queryObj = Object.assign({}, query, { context });

    return client({
      url: "/subscriptions",
      params: queryObj,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function getById({ token, jwtToken, id, headers }) {
    return client({
      url: `/subscriptions/${id}`,
      method: "get",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function create({ token, jwtToken, subscription, headers }) {
    return client({
      url: "/subscriptions",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      data: subscription
    });
  }

  function put({ token, jwtToken, id, subscription, headers }) {
    return client({
      url: `/subscriptions/${id}`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      data: subscription
    });
  }

  function deleteById({ token, jwtToken, id, headers }) {
    return client({
      url: `/subscriptions/${id}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
    });
  }

  return {
    all,
    create,
    getById,
    put,
    deleteById
  };

}

module.exports = subscriptionsFactory;