const { authorizationHeaders } = require("./../endpoints_helpers");

function syncEntryFactory({ client, internalAuthTokenProvider }) {

  function patch({ token, data, jwtToken }) {
    return client({
      url: "/sync-entry",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  return {
    patch
  };

}

module.exports = syncEntryFactory;
