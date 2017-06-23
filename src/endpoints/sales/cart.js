const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function cartFactory({ client }) {

  function get({ token, id }) {
    return client({
      url: `/cart/${id}`,
      headers: authorizationHeaders({token})
    });
  }

  function create({ token, cart, jwtToken }) {
    return client({ 
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: cart
    });
  }

  return { 
    get,
    create
  };
}

module.exports = cartFactory;