const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function transactionFactory({ client }) {

  function get({ token, jwtToken, id, providerId }) {
    return client({
      url: `/transaction/${id}?providerId=${providerId}`,
      headers: authorizationHeaders({ token , jwtToken })
    });
  }

  return { 
    get
  };
}

module.exports = transactionFactory;
