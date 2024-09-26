const {authorizationHeaders} = require("./../endpoints_helpers.js");

function orderFactory({client, internalAuthTokenProvider}) {
  function create({token, order, jwtToken, headers}) {
    return client({
      url: "/order",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: order
    });
  }

  function get({token, orderId, query = {}, headers}) {
    return client({
      url: `/order/${orderId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function overwrite({token, orderId, payments, jwtToken, headers, query = {}}) {
    return client({
      url: `/orders/${orderId}/payments`,
      method: "post",
      data: payments,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    get,
    overwrite
  };
}

module.exports = orderFactory;
