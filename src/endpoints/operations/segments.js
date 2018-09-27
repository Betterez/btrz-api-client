const { authorizationHeaders } = require("./../endpoints_helpers");

function segmentsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, productId, ticketId, providerId}) {
    return client({
      url: `/products/${productId}/segments/${ticketId}`,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      params: {
        providerId
      }
    });
  }

  return {
    all
  };
}

module.exports = segmentsFactory;
