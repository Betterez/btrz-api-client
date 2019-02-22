const { authorizationHeaders } = require("./../endpoints_helpers");

function tripsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, query = {} }) {
    return client({
      url: "/trips",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all
  };
}

module.exports = tripsFactory;
