const { authorizationHeaders } = require("./../endpoints_helpers");

function orderFactory({ client, internalAuthTokenProvider }) {
  function create({ token, order, jwtToken, headers }) {
    return client({ 
      url: "/order",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: order
    });
  }

  function get({ token, orderId, query = {}, headers }) {
    return client({
      url: `/order/${orderId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return { 
    create,
    get
  };
}

module.exports = orderFactory;