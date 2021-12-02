const { authorizationHeaders } = require("./../endpoints_helpers");

function redeemableItemsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, redeemableItemId, query = {}, headers }) {
    return client({
      url: `/redeemable-items/${redeemableItemId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function getValid({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/redeemable-items",
      params: query,
      headers: authorizationHeaders({token, jwtToken, headers})
    });
  }

  return {
    get,
    getValid
  };
}

module.exports = redeemableItemsFactory;
