const { authorizationHeaders } = require("./../endpoints_helpers");

function syncEntryFactory({ client, internalAuthTokenProvider }) {

  function add({ token, data, jwtToken }) {
    return client({
      url: "/sync-entry",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  return {
    add
  };

}

module.exports = syncEntryFactory;
