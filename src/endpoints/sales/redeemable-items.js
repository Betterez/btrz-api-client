const { authorizationHeaders } = require("./../endpoints_helpers");

function redeemableItemsFactory({ client, internalAuthTokenProvider }) {

  function get({ token, redeemableItemId, query = {} }) {
    return client({
      url: `/redeemable-items/${redeemableItemId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = redeemableItemsFactory;
