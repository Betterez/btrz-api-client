const { authorizationHeaders } = require("./../endpoints_helpers");

function tripChangeInfoFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, productId, params, headers}) {
    return client({
      url: `/trip-change-info/${productId}`,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }),
      params
    });
  }

  return {
    get
  };
}

module.exports = tripChangeInfoFactory;
