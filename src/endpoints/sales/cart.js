const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function cartFactory({ client }) {

  function get({ token, id, providerId }) {
    let url = `/cart/${id}`;

    if(providerId) {
      url = `${url}?providerId=${providerId}`;
    }

    return client({
      url,
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