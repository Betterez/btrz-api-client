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

  return { 
    create
  };
}

module.exports = orderFactory;