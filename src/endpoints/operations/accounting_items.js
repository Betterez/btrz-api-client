const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function accountingItemsFactory({
  client, internalAuthTokenProvider
}) {
  function all({
    token,
    query = {}
  }) {
    return client.get("/accounting-items", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider
      })
    });
  }

  function get({
    accountingItemId, token
  }) {
    return client.get(`/accounting-items/${accountingItemId}`, {
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider
      })
    });
  }

  return {
    all,
    get
  };
}

module.exports = accountingItemsFactory;
