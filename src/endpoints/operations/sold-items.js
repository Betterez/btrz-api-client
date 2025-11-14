const {authorizationHeaders} = require("./../endpoints_helpers.js");

function soldItems({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, soldItemId, headers, query}) {
    return client.get(`/sold-items/${soldItemId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, headers, query}) {
    return client.get("/sold-items", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = soldItems;
