const { authorizationHeaders } = require("./../endpoints_helpers");

function orderFactory({ client, internalAuthTokenProvider }) {
  function create({ token, order, jwtToken }) {
    return client({ 
      url: "/order",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: order
    });
  }

  function get({ token, orderId, query = {} }) {
    return client({
      url: `/order/${orderId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    create,
    get
  };
}

module.exports = orderFactory;