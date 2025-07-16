const {authorizationHeaders} = require("./../endpoints_helpers.js");

function soldItems({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, soldItemId, headers}) {
    return client.get(`/sold-items/${soldItemId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, headers}) {
    return client.get("/sold-items", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = soldItems;
