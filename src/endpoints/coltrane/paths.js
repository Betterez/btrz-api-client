const { authorizationHeaders } = require("./../endpoints_helpers");

function coltraneFactory({ client, internalAuthTokenProvider }) {
  function all({ token, query = {}, headers }) {
    return client({
      url: "/paths",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = coltraneFactory;
