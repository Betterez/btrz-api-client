const { authorizationHeaders } = require("./../endpoints_helpers");

function promosFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/promos", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function remove({ jwtToken, promoId, token }) {
    return client.delete(`/promos/${promoId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    all,
    remove
  };

}

module.exports = promosFactory;