const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function externalPassesFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/external-passes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  function get({externalPassId, token, jwtToken, headers}) {
    return client.get(`/external-passes/${externalPassId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = externalPassesFactory;
