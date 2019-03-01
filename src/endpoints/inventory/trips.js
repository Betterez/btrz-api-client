const { authorizationHeaders } = require("./../endpoints_helpers");

function tripsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/trips",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    all
  };
}

module.exports = tripsFactory;
