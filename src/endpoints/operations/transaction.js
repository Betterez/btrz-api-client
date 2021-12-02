const { authorizationHeaders } = require("./../endpoints_helpers");

function transactionFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, id, providerId, headers }) {
    return client({
      url: `/transaction/${id}?providerId=${providerId}`,
      headers: authorizationHeaders({ token , jwtToken, internalAuthTokenProvider, headers })
    });
  }

  return { 
    get
  };
}

module.exports = transactionFactory;
