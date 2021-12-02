const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function accountingItemsFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/accounting-items", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  function get({
    accountingItemId, token, headers
  }) {
    return client.get(`/accounting-items/${accountingItemId}`, {
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    all,
    get
  };
}

module.exports = accountingItemsFactory;
