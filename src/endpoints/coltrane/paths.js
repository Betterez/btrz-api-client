const { authorizationHeaders } = require("./../endpoints_helpers");

function coltraneFactory({ client, internalAuthTokenProvider }) {
  function all({ token, query = {} }) {
    return client({
      url: "/paths",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all
  };
}

module.exports = coltraneFactory;
