const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function orderFactory({ client }) {

  function create({ token, order, jwtToken }) {
    return client({ 
      url: "/order",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: order
    });
  }

  function get({ token, orderId }) {
    return client({
      url: `/order/${orderId}`,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    create,
    get
  };
}

module.exports = orderFactory;