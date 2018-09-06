const { authorizationHeaders } = require("./../endpoints_helpers");

function subscriptionsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, context, query = {} }) {
    const queryObj = Object.assign({}, query, { context });

    return client({
      url: "/subscriptions",
      params: queryObj,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function getById({ token, jwtToken, id }) {
    return client({
      url: `/subscriptions/${id}`,
      method: "get",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function create({ token, jwtToken, subscription }) {
    return client({
      url: "/subscriptions",
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      data: subscription
    });
  }

  function put({ token, jwtToken, id, subscription }) {
    return client({
      url: `/subscriptions/${id}`,
      method: "put",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      data: subscription
    });
  }

  function deleteById({ token, jwtToken, id }) {
    return client({
      url: `/subscriptions/${id}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
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