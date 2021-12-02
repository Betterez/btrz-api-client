const { authorizationHeaders } = require("./../endpoints_helpers");

function tripsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/trips",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({token, id, headers}) {
    return client.get(`/trip/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = tripsFactory;
