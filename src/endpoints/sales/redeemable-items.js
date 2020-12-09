const { authorizationHeaders } = require("./../endpoints_helpers");

function redeemableItemsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, redeemableItemId, query = {} }) {
    return client({
      url: `/redeemable-items/${redeemableItemId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function getValid({token, query = {}}) {
    return client({
      url: "/redeemable-items",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get,
    getValid
  };
}

module.exports = redeemableItemsFactory;
