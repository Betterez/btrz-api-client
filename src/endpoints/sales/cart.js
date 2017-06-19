const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function cartFactory({ client }) {

  function get({ token, id }) {
    return client({
      url: `/cart/${id}`,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    get
  };
}

module.exports = cartFactory;