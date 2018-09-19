const { authorizationHeaders } = require("./../endpoints_helpers");

function tripChangeInfoFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, productId, params}) {
    return client({
      url: `/trip-change-info/${productId}`,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      params
    });
  }

  return {
    get
  };
}

module.exports = tripChangeInfoFactory;
